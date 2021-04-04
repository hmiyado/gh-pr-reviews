import {Octokit} from '@octokit/core'
import {PullRequest} from './types'

export class Client {
  private octokit: Octokit

  constructor(octokit: Octokit) {
    this.octokit = octokit
  }

  async fetchPullRequests(owner: string, repository: string): Promise<PullRequest[]> {
    const pullsEndpoint = 'GET /repos/{owner}/{repo}/pulls'
    const response = await this.octokit.request(pullsEndpoint, {
      owner: owner,
      repo: repository,
    })
    return response.data.map(value => {
      return {
        number: value.number,
        user: {
          name: value.user?.login,
        },
        url: value.html_url,
        comments: [],
      }
    })
  }
}
