import {Octokit} from '@octokit/core'

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

const fetchPullRequests = async (octokit: Octokit, owner: string, repository: string): Promise<PullRequest[]> => {
  const pullsEndpoint = 'GET /repos/{owner}/{repo}/pulls'
  const response = await octokit.request(pullsEndpoint, {
    owner: owner,
    repo: repository,
  })
  return response.data.map(value => {
    return {
      number: value.number,
      user: {
        name: value.user?.login,
      },
      url: value.html_url,
      comments: [],
    }
  })
}

export const fetchPullRequestReviews = async (
  octokit: Octokit,
  owner: string,
  repository: string
): Promise<GitHubActivity> => {
  const pullRequests = await fetchPullRequests(octokit, owner, repository)
  return {
    owner,
    repository,
    pullRequests,
  }
}

