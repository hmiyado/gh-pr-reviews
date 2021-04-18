import { Command, flags } from '@oclif/command'
import { env } from 'process'
import { Cli } from './cli'
import { CliOptionSort } from './cli'

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
    sort: flags.string({
      char: 's',
      options: ['user', 'pull-request'],
      default: 'user',
      description: "sort output by 'user' or 'pull-request'. use 'user' by default",
    }),
    baseUrl: flags.string({
      char: 'b',
      description: 'api base url. use https://api.github.com by default',
    }),
  }

  static args = []

  async run() {
    const { flags } = this.parse(GhPrReviews)

    const cli = new Cli({ env, baseUrl: flags.baseUrl, token: flags.token, owner: flags.owner, repository: flags.repository, sort: flags.sort as CliOptionSort })
    cli.run()
  }
}

export = GhPrReviews
