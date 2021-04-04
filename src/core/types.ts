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

interface GitHubActivity {
    owner: string;
    repository: string;
    pullRequests: PullRequest[];
}

export {
  GitHubUser,
  ReviewComment,
  PullRequest,
  GitHubActivity,
}
