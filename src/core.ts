import {GitHubActivity} from './core/types'
import {Client} from './core/client'

export const fetchPullRequestReviews = async (
  client: Client,
  owner: string,
  repository: string
): Promise<GitHubActivity> => {
  const pullRequests = await client.fetchPullRequests(owner, repository)
  return {
    owner,
    repository,
    pullRequests,
  }
}

