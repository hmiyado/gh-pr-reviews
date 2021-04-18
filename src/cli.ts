import { Octokit } from '@octokit/core'
import { fetchPullRequestReviews } from './core'
import { Client } from './core/client'

export class Cli {
  client: Client

  owner: string

  repository: string

  constructor(env: NodeJS.ProcessEnv, token: string | undefined, owner: string, repository: string) {
    const octokit = new Octokit({ auth: token || env.GPR_TOKEN })
    this.client = new Client(octokit)
    this.owner = owner
    this.repository = repository
  }

  async run() {
    const pullRequestReviews = await fetchPullRequestReviews(this.client, this.owner, this.repository)
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(pullRequestReviews))
  }
}
