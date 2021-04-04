import {Octokit} from '@octokit/core'

import {PullRequest, GitHubActivity} from './core/types'

const fetchPullRequests = async (octokit: Octokit, owner: string, repository: string): Promise<PullRequest[]> => {
  const pullsEndpoint = 'GET /repos/{owner}/{repo}/pulls'
  const response = await octokit.request(pullsEndpoint, {
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

export const fetchPullRequestReviews = async (
  octokit: Octokit,
  owner: string,
  repository: string
): Promise<GitHubActivity> => {
  const pullRequests = await fetchPullRequests(octokit, owner, repository)
  return {
    owner,
    repository,
    pullRequests,
  }
}

