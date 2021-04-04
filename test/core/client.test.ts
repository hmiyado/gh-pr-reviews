import assert = require('assert')
import nock = require('nock')
import {Octokit} from '@octokit/core'

import {Client} from '../../src/core/client'
import {response} from '../octokit/list-pull-requests'
import {listPullRequestReviewComment} from '../octokit/list-pull-request-review-comments'

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

  describe('fetchPullRequestReviewComments', () => {
    beforeEach(() => {
      nock(/.+/)
      .get('/repos/octocat/Hello-World/pulls/42/comments')
      .reply(200, listPullRequestReviewComment)
    })
    afterEach(() => {
      nock.cleanAll()
    })
    it('should return ReviewComments[]', async () => {
      const client = new Client(new Octokit())
      const actual = await client.fetchPullRequestReviewComments('octocat', 'Hello-World', {
        number: 42,
        url: '',
        user: {
          name: '',
        },
        comments: [],
      })
      assert.deepStrictEqual(actual, [{
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
        user: {
          name: 'octocat',
        },
      }])
    })
  })
})
