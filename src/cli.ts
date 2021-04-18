import { Octokit } from '@octokit/core'
import { fetchPullRequestReviews } from './core'
import { reorderByUser } from './core/adapter'
import { Client } from './core/client'

export type CliOptionSort = 'user' | 'pull-request'
export class Cli {
  client: Client

  owner: string

  repository: string

  sort: CliOptionSort

  // eslint-disable-next-line max-params
  constructor(env: NodeJS.ProcessEnv, token: string | undefined, owner: string, repository: string, sort: CliOptionSort) {
    const octokit = new Octokit({ auth: token || env.GPR_TOKEN })
    this.client = new Client(octokit)
    this.owner = owner
    this.repository = repository
    this.sort = sort
  }

  async run() {
    const pullRequestReviews = await fetchPullRequestReviews(this.client, this.owner, this.repository)

    switch (this.sort) {
      case 'user':
        {
          const userPullRequests = reorderByUser(pullRequestReviews)
          // eslint-disable-next-line no-console
          console.log(JSON.stringify(userPullRequests))
        }
        break
      case 'pull-request':
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(pullRequestReviews))
        break
    }
  }
}
