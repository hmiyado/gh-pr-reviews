import { Command, flags } from '@oclif/command'
import { env } from 'process'
import { Cli } from './cli'

class GhPrReviews extends Command {
  static description = 'get pull request review comments from github'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    owner: flags.string({
      char: 'o',
      description: 'owner of the repository',
      required: true,
    }),
    repository: flags.string({
      char: 'r',
      description: 'name of the repository',
      required: true,
    }),
    token: flags.string({
      char: 't',
      description: 'access token for GitHub. use environment variable GPR_TOKEN if not specified',
    }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { flags } = this.parse(GhPrReviews)

    const cli = new Cli(env, flags.token, flags.owner, flags.repository)
    cli.run()
  }
}

export = GhPrReviews
