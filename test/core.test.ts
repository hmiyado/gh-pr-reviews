import assert = require('assert')
import nock = require('nock')
import {Octokit} from '@octokit/core'

import {fetchPullRequestReviews} from '../src/core'
import {response} from './octokit/list-pull-requests'

describe('core', function () {
  describe('fetchPullRequestReviews', function () {
    beforeEach(() => {
      nock(/.+/)
      .get('/repos/organization/repository/pulls')
      .reply(200, response)
    })
    afterEach(() => {
      nock.cleanAll()
    })
    it('should return GitHubActivity', async () => {
      const actual = await fetchPullRequestReviews(new Octokit(), 'organization', 'repository')
      assert.deepStrictEqual(actual, {
        organization: 'organization',
        repository: 'repository',
        user: {
          name: 'sample',
        },
        pullRequests: [{
          id: 1347,
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
