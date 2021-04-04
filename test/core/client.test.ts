import assert = require('assert')
import nock = require('nock')
import {Octokit} from '@octokit/core'

import {Client} from '../../src/core/client'
import {response} from '../octokit/list-pull-requests'

describe('cleint', () => {
  describe('fetchPullRequests', async () => {
    beforeEach(() => {
      nock(/.+/)
      .get('/repos/octocat/Hello-World/pulls')
      .reply(200, response)
    })
    afterEach(() => {
      nock.cleanAll()
    })
    it('should return PullRequest[]', async () => {
      const client = new Client(new Octokit())
      const actual = await client.fetchPullRequests('octocat', 'Hello-World')
      assert.deepStrictEqual(actual, [{
        number: 1347,
        url: 'https://github.com/octocat/Hello-World/pull/1347',
        user: {
          name: 'octocat',
        },
        comments: [],
      }])
    })
  })
})
