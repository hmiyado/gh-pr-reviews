interface GitHubUser {
  name?: string;
}

interface ReviewComment {
  user: GitHubUser;
  url: string;
}

interface PullRequest {
    number: number;
    user: GitHubUser;
    url: string;
    comments: ReviewComment[];
}

export {
  GitHubUser,
  ReviewComment,
  PullRequest,
}
