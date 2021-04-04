import assert = require('assert')
import nock = require('nock')
import {Octokit} from '@octokit/core'

import {fetchPullRequestReviews} from '../src/core'
import {response} from './octokit/list-pull-requests'

describe('core', function () {
  describe('fetchPullRequestReviews', function () {
    beforeEach(() => {
      nock(/.+/)
      .get('/repos/octocat/Hello-World/pulls')
      .reply(200, response)
    })
    afterEach(() => {
      nock.cleanAll()
    })
    it('should return GitHubActivity', async () => {
      const actual = await fetchPullRequestReviews(new Octokit(), 'octocat', 'Hello-World')
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
