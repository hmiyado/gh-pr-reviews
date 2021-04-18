# gh-pr-reviews

get github pull request reviews for each user

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gh-pr-reviews.svg)](https://npmjs.org/package/gh-pr-reviews)
[![Downloads/week](https://img.shields.io/npm/dw/gh-pr-reviews.svg)](https://npmjs.org/package/gh-pr-reviews)
[![License](https://img.shields.io/npm/l/gh-pr-reviews.svg)](https://github.com/hmiyado/gh-pr-reviews/blob/master/package.json)

# Commands

```sh
$ gpr -h
get pull request review comments from github

USAGE
  $ gpr

OPTIONS
  -b, --baseUrl=baseUrl         api base url. use https://api.github.com by default
  -h, --help                    show CLI help
  -o, --owner=owner             (required) owner of the repository
  -r, --repository=repository   (required) name of the repository
  -s, --sort=user|pull-request  [default: user] sort output by 'user' or 'pull-request'. use 'user' by default
  -t, --token=token             access token for GitHub. use environment variable GPR_TOKEN if not specified
  -v, --version                 show CLI version
```

```sh
$ gpr -o hmiyado -r gh-pr-reviews
```
