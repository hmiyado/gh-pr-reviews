import { PullRequest, ReviewComment } from './core/types'
import { Client } from './core/client'

export const fetchPullRequestReviews = async (
  client: Client,
  owner: string,
  repository: string
): Promise<
  {
    pullRequest: PullRequest
    reviews: ReviewComment[]
  }[]
> => {
  const pullRequests = await client.fetchPullRequests(owner, repository)
  const promisePullRequestAndReviews = pullRequests.map(async (value) => {
    const reviews = await client.fetchPullRequestReviewComments(owner, repository, value)
    return {
      pullRequest: value,
      reviews,
    }
  })
  const pullRequestAndReviews = await Promise.all(promisePullRequestAndReviews)
  return pullRequestAndReviews
}
