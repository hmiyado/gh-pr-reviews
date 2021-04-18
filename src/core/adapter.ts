import { GitHubUser, PullRequest, ReviewComment } from './types'

export interface UserPullRequests {
  user: GitHubUser
  pullRequests: { pullRequest: PullRequest; reviews: ReviewComment[] }[]
}

export const reorderByUser = (
  source: {
    pullRequest: PullRequest
    reviews: ReviewComment[]
  }[]
): UserPullRequests[] => {
  return source.reduce((previousValue: UserPullRequests[], currentValue) => {
    const { pullRequest, reviews } = currentValue
    const currentUserIndex = previousValue.findIndex((element) => element.user.name === pullRequest.user.name)
    if (currentUserIndex === -1) {
      // current user is not assigned
      return [
        ...previousValue,
        {
          user: pullRequest.user,
          pullRequests: [{ pullRequest, reviews }],
        },
      ]
    }
    // current user is already assinged
    const unmodified = previousValue.filter((_element, index) => index !== currentUserIndex)
    const modified = previousValue[currentUserIndex]
    return [
      ...unmodified,
      {
        user: modified.user,
        pullRequests: [...modified.pullRequests, { pullRequest, reviews }],
      },
    ]
  }, [])
}
