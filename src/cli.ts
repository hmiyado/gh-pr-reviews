import { Octokit } from '@octokit/core'
import { fetchPullRequestReviews } from './core'
import { sortByUser } from './core/adapter'
import { Client } from './core/client'

export type CliOptionSort = 'user' | 'pull-request'

export type CliOption = {
  env: NodeJS.ProcessEnv
  baseUrl: string | undefined
  token: string | undefined
  owner: string
  repository: string
  sort: CliOptionSort
}
export class Cli {
  client: Client

  owner: string

  repository: string

  sort: CliOptionSort

  constructor({ env, baseUrl, token, owner, repository, sort }: CliOption) {
    const octokit = new Octokit({ auth: token || env.GPR_TOKEN, baseUrl: baseUrl || 'https://api.github.com' })
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
          const userPullRequests = sortByUser(pullRequestReviews)
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
