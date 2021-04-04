import {Command, flags} from '@oclif/command'
import {Octokit} from '@octokit/core'
import {fetchPullRequestReviews} from './core'
import {Client} from './core/client'

class GhPrReviews extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    owner: flags.string({char: 'o', description: 'owner of the repository', required: true}),
    repository: flags.string({char: 'r', description: 'name of the repository', required: true}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(GhPrReviews)

    const octokit = new Octokit()
    const client = new Client(octokit)
    const pullRequestReviews = await fetchPullRequestReviews(client, flags.owner, flags.repository)
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(pullRequestReviews))
  }
}

export = GhPrReviews
