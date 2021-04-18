import assert = require('assert')

import { reorderByUser } from '../../src/core/adapter'
import { eslintPullRequests } from '../sample/eslint-pull-requests'

describe('adapter', () => {
  describe('reorderByUser', async () => {
    it('should return UserPullRequests[]', async () => {
      const actual = reorderByUser(eslintPullRequests)
      assert.deepStrictEqual(actual, [
        { user: { name: 'arminyahya' }, pullRequests: [{ pullRequest: { number: 14333, user: { name: 'arminyahya' }, url: 'https://github.com/eslint/eslint/pull/14333' }, reviews: [] }] },
        { user: { name: 'Nate-Wilkins' }, pullRequests: [{ pullRequest: { number: 14332, user: { name: 'Nate-Wilkins' }, url: 'https://github.com/eslint/eslint/pull/14332' }, reviews: [] }] },
        { user: { name: 'nzakas' }, pullRequests: [{ pullRequest: { number: 14321, user: { name: 'nzakas' }, url: 'https://github.com/eslint/eslint/pull/14321' }, reviews: [] }] },
        { user: { name: 'bmish' }, pullRequests: [{ pullRequest: { number: 14291, user: { name: 'bmish' }, url: 'https://github.com/eslint/eslint/pull/14291' }, reviews: [] }] },
        {
          user: { name: 'stephenwade' },
          pullRequests: [
            {
              pullRequest: { number: 14287, user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287' },
              reviews: [
                { user: { name: 'g-plane' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r607557388' },
                { user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r611322025' },
                { user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r611322250' },
                { user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r611322915' },
                { user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r611323585' },
                { user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r611323997' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r611634903' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612048175' },
                { user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612052593' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612867870' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612894374' },
                { user: { name: 'aladdin-add' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612899006' },
                { user: { name: 'aladdin-add' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612900978' },
                { user: { name: 'aladdin-add' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612904462' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612905875' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612905920' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612907079' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r612909515' },
                { user: { name: 'stephenwade' }, url: 'https://github.com/eslint/eslint/pull/14287#discussion_r614357511' },
              ],
            },
          ],
        },
        {
          user: { name: 'patriscus' },
          pullRequests: [
            {
              pullRequest: { number: 14282, user: { name: 'patriscus' }, url: 'https://github.com/eslint/eslint/pull/14282' },
              reviews: [
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/14282#discussion_r609824816' },
                { user: { name: 'patriscus' }, url: 'https://github.com/eslint/eslint/pull/14282#discussion_r610376242' },
              ],
            },
          ],
        },
        {
          user: { name: 'boutahlilsoufiane' },
          pullRequests: [
            {
              pullRequest: { number: 14238, user: { name: 'boutahlilsoufiane' }, url: 'https://github.com/eslint/eslint/pull/14238' },
              reviews: [
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r608256185' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r608262642' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r608290241' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r608295187' },
                { user: { name: 'boutahlilsoufiane' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r611243673' },
                { user: { name: 'boutahlilsoufiane' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r611243939' },
                { user: { name: 'boutahlilsoufiane' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r611244088' },
                { user: { name: 'boutahlilsoufiane' }, url: 'https://github.com/eslint/eslint/pull/14238#discussion_r611244646' },
              ],
            },
          ],
        },
        {
          user: { name: 'fregante' },
          pullRequests: [
            {
              pullRequest: { number: 14316, user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14316' },
              reviews: [{ user: { name: 'TimvdLippe' }, url: 'https://github.com/eslint/eslint/pull/14316#discussion_r613490728' }],
            },
            { pullRequest: { number: 14193, user: { name: 'fregante' }, url: 'https://github.com/eslint/eslint/pull/14193' }, reviews: [] },
          ],
        },
        {
          user: { name: 'gaearon' },
          pullRequests: [
            {
              pullRequest: { number: 14166, user: { name: 'gaearon' }, url: 'https://github.com/eslint/eslint/pull/14166' },
              reviews: [
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/14166#discussion_r585951093' },
                { user: { name: 'nzakas' }, url: 'https://github.com/eslint/eslint/pull/14166#discussion_r587956785' },
              ],
            },
          ],
        },
        { user: { name: 'Zzzen' }, pullRequests: [{ pullRequest: { number: 14152, user: { name: 'Zzzen' }, url: 'https://github.com/eslint/eslint/pull/14152' }, reviews: [] }] },
        { user: { name: 'JoakimoNilsson' }, pullRequests: [{ pullRequest: { number: 14030, user: { name: 'JoakimoNilsson' }, url: 'https://github.com/eslint/eslint/pull/14030' }, reviews: [] }] },
        {
          user: { name: 'whizzzkid' },
          pullRequests: [
            {
              pullRequest: { number: 14004, user: { name: 'whizzzkid' }, url: 'https://github.com/eslint/eslint/pull/14004' },
              reviews: [
                { user: { name: 'btmills' }, url: 'https://github.com/eslint/eslint/pull/14004#discussion_r557831055' },
                { user: { name: 'whizzzkid' }, url: 'https://github.com/eslint/eslint/pull/14004#discussion_r557885977' },
              ],
            },
          ],
        },
        { user: { name: 'brodybits' }, pullRequests: [{ pullRequest: { number: 13992, user: { name: 'brodybits' }, url: 'https://github.com/eslint/eslint/pull/13992' }, reviews: [] }] },
        {
          user: { name: 'epoberezkin' },
          pullRequests: [
            {
              pullRequest: { number: 13911, user: { name: 'epoberezkin' }, url: 'https://github.com/eslint/eslint/pull/13911' },
              reviews: [
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13911#discussion_r537129761' },
                { user: { name: 'epoberezkin' }, url: 'https://github.com/eslint/eslint/pull/13911#discussion_r537269868' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13911#discussion_r537797408' },
                { user: { name: 'brodybits' }, url: 'https://github.com/eslint/eslint/pull/13911#discussion_r552233365' },
              ],
            },
          ],
        },
        { user: { name: 'firefish5000' }, pullRequests: [{ pullRequest: { number: 13808, user: { name: 'firefish5000' }, url: 'https://github.com/eslint/eslint/pull/13808' }, reviews: [] }] },
        {
          user: { name: 'snitin315' },
          pullRequests: [
            { pullRequest: { number: 14336, user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/14336' }, reviews: [] },
            { pullRequest: { number: 14335, user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/14335' }, reviews: [] },
            {
              pullRequest: { number: 14304, user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/14304' },
              reviews: [
                { user: { name: 'aladdin-add' }, url: 'https://github.com/eslint/eslint/pull/14304#discussion_r615182297' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/14304#discussion_r615184792' },
                { user: { name: 'aladdin-add' }, url: 'https://github.com/eslint/eslint/pull/14304#discussion_r615187252' },
              ],
            },
            {
              pullRequest: { number: 13756, user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756' },
              reviews: [
                { user: { name: 'ljharb' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r504855910' },
                { user: { name: 'ljharb' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r504856278' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r505370538' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r505371177' },
                { user: { name: 'g-plane' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r507331007' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r507349867' },
                { user: { name: 'arcanis' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r517341515' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r527915460' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r530953335' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r534575473' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r534581766' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r534582868' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r550946243' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r550946245' },
                { user: { name: 'snitin315' }, url: 'https://github.com/eslint/eslint/pull/13756#discussion_r550948164' },
              ],
            },
          ],
        },
        { user: { name: 'mdjermanovic' }, pullRequests: [{ pullRequest: { number: 13748, user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13748' }, reviews: [] }] },
        {
          user: { name: 'furmandev' },
          pullRequests: [
            {
              pullRequest: { number: 13659, user: { name: 'furmandev' }, url: 'https://github.com/eslint/eslint/pull/13659' },
              reviews: [{ user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13659#discussion_r484066973' }],
            },
          ],
        },
        { user: { name: 'josmo' }, pullRequests: [{ pullRequest: { number: 13617, user: { name: 'josmo' }, url: 'https://github.com/eslint/eslint/pull/13617' }, reviews: [] }] },
        {
          user: { name: 'JJoGeon' },
          pullRequests: [
            {
              pullRequest: { number: 13573, user: { name: 'JJoGeon' }, url: 'https://github.com/eslint/eslint/pull/13573' },
              reviews: [
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471301662' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471311827' },
                { user: { name: 'JJoGeon' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471373656' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471409882' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471517222' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471614871' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471626981' },
                { user: { name: 'JJoGeon' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471846841' },
                { user: { name: 'JJoGeon' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r471851694' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r472095190' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r475052374' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r475052392' },
                { user: { name: 'JJoGeon' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r479626358' },
                { user: { name: 'yeonjuan' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r481102969' },
                { user: { name: 'JJoGeon' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r484495520' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13573#discussion_r487603139' },
              ],
            },
          ],
        },
        { user: { name: 'tjenkinson' }, pullRequests: [{ pullRequest: { number: 13471, user: { name: 'tjenkinson' }, url: 'https://github.com/eslint/eslint/pull/13471' }, reviews: [] }] },
        {
          user: { name: 'jooohhn' },
          pullRequests: [
            {
              pullRequest: { number: 13415, user: { name: 'jooohhn' }, url: 'https://github.com/eslint/eslint/pull/13415' },
              reviews: [
                { user: { name: 'mysticatea' }, url: 'https://github.com/eslint/eslint/pull/13415#discussion_r439749894' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13415#discussion_r455083475' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13415#discussion_r455136408' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13415#discussion_r455139754' },
              ],
            },
          ],
        },
        { user: { name: 'mysticatea' }, pullRequests: [{ pullRequest: { number: 13392, user: { name: 'mysticatea' }, url: 'https://github.com/eslint/eslint/pull/13392' }, reviews: [] }] },
        {
          user: { name: 'anikethsaha' },
          pullRequests: [
            {
              pullRequest: { number: 13411, user: { name: 'anikethsaha' }, url: 'https://github.com/eslint/eslint/pull/13411' },
              reviews: [
                { user: { name: 'kaicataldo' }, url: 'https://github.com/eslint/eslint/pull/13411#discussion_r439047745' },
                { user: { name: 'anikethsaha' }, url: 'https://github.com/eslint/eslint/pull/13411#discussion_r439230423' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13411#discussion_r439270000' },
                { user: { name: 'anikethsaha' }, url: 'https://github.com/eslint/eslint/pull/13411#discussion_r439280777' },
                { user: { name: 'mdjermanovic' }, url: 'https://github.com/eslint/eslint/pull/13411#discussion_r439281916' },
              ],
            },
            { pullRequest: { number: 13325, user: { name: 'anikethsaha' }, url: 'https://github.com/eslint/eslint/pull/13325' }, reviews: [] },
          ],
        },
        {
          user: { name: 'edg2s' },
          pullRequests: [
            {
              pullRequest: { number: 13290, user: { name: 'edg2s' }, url: 'https://github.com/eslint/eslint/pull/13290' },
              reviews: [
                { user: { name: 'mysticatea' }, url: 'https://github.com/eslint/eslint/pull/13290#discussion_r424746888' },
                { user: { name: 'edg2s' }, url: 'https://github.com/eslint/eslint/pull/13290#discussion_r424770495' },
                { user: { name: 'mysticatea' }, url: 'https://github.com/eslint/eslint/pull/13290#discussion_r424770634' },
                { user: { name: 'edg2s' }, url: 'https://github.com/eslint/eslint/pull/13290#discussion_r424771071' },
              ],
            },
          ],
        },
      ])
    })
  })
})