interface GitHubUser {
  name?: string
}

interface ReviewComment {
  user: GitHubUser
  url: string
}

interface PullRequest {
  number: number
  user: GitHubUser
  url: string
}

export { GitHubUser, ReviewComment, PullRequest }
