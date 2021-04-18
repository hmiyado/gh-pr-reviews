import assert = require('assert')
import { stubInterface } from 'ts-sinon'

import { fetchPullRequestReviews } from '../src/core'
import { Client } from '../src/core/client'

describe('core', function () {
  describe('fetchPullRequestReviews', function () {
    it('should return PullRequestReviews', async () => {
      const pullRequest = {
        number: 1347,
        url: 'https://github.com/octocat/Hello-World/pull/1347',
        user: {
          name: 'octocat',
        },
      }
      const review = {
        user: {
          name: 'octocat',
        },
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
      }
      const client = stubInterface<Client>({
        fetchPullRequests: (async () => {
          return [pullRequest]
        })(),
        fetchPullRequestReviewComments: (async () => {
          return [review]
        })(),
      })

      const actual = await fetchPullRequestReviews(client, 'octocat', 'Hello-World')
      assert.deepStrictEqual(actual, [
        {
          pullRequest,
          reviews: [review],
        },
      ])
    })
  })
})
