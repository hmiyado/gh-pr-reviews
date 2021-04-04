import {Octokit} from '@octokit/core'

import {GitHubActivity} from './core/types'
import {Client} from './core/client'

export const fetchPullRequestReviews = async (
  octokit: Octokit,
  owner: string,
  repository: string
): Promise<GitHubActivity> => {
  const client = new Client(octokit)
  const pullRequests = await client.fetchPullRequests(owner, repository)
  return {
    owner,
    repository,
    pullRequests,
  }
}

