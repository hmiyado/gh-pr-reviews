import assert = require('assert')
import {stubInterface} from 'ts-sinon'

import {fetchPullRequestReviews} from '../src/core'
import {Client} from '../src/core/client'

describe('core', function () {
  describe('fetchPullRequestReviews', function () {
    it('should return GitHubActivity', async () => {
      const client = stubInterface<Client>({
        fetchPullRequests: (async () => {
          return [{
            number: 1347,
            url: 'https://github.com/octocat/Hello-World/pull/1347',
            user: {
              name: 'octocat',
            },
            comments: [],
          }]
        })(),
      })

      const actual = await fetchPullRequestReviews(client, 'octocat', 'Hello-World')
      assert.deepStrictEqual(actual, {
        owner: 'octocat',
        repository: 'Hello-World',
        pullRequests: [{
          number: 1347,
          url: 'https://github.com/octocat/Hello-World/pull/1347',
          user: {
            name: 'octocat',
          },
          comments: [],
        }],
      })
    })
  })
})
