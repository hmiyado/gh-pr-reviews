import {Octokit} from '@octokit/core'

interface GitHubUser {
  name?: string;
}

interface ReviewComment {
  user: GitHubUser;
  url: string;
}

interface PullRequest {
    id: number;
    user: GitHubUser;
    url: string;
    comments: ReviewComment[];
}

interface GitHubActivity {
    organization: string;
    repository: string;
    user: GitHubUser;
    pullRequests: PullRequest[];
}

export const fetchPullRequestReviews = async (
  octokit: Octokit,
  organization: string,
  repository: string
): Promise<GitHubActivity> => {
  const pullsEndpoint = 'GET /repos/{owner}/{repo}/pulls'
  const response = await octokit.request(pullsEndpoint, {
    owner: organization,
    repo: repository,
  })
  const pullRequests: PullRequest[] = response.data.map(value => {
    return {
      id: value.number,
      user: {
        name: value.user?.login,
      },
      url: value.html_url,
      comments: [],
    }
  })

  return {
    organization,
    repository,
    user: {
      name: 'sample',
    },
    pullRequests,
  }
}

