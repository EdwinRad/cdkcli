mynewcli
========

Demo CLI for the #100daysofcode challenge



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![License](https://img.shields.io/npm/l/mynewcli.svg)](https://github.com/democli/mynewcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mynewcli
$ mynewcli COMMAND
running command...
$ mynewcli (-v|--version|version)
mynewcli/0.0.0 darwin-x64 node-v13.10.1
$ mynewcli --help [COMMAND]
USAGE
  $ mynewcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mynewcli check`](#mynewcli-check)
* [`mynewcli child`](#mynewcli-child)
* [`mynewcli goodbye`](#mynewcli-goodbye)
* [`mynewcli hello [FILE]`](#mynewcli-hello-file)
* [`mynewcli help [COMMAND]`](#mynewcli-help-command)
* [`mynewcli init [FILE]`](#mynewcli-init-file)
* [`mynewcli multiquestions [FILE]`](#mynewcli-multiquestions-file)
* [`mynewcli test [SECONDARG]`](#mynewcli-test-secondarg)

## `mynewcli check`

describe the command here

```
USAGE
  $ mynewcli check
```

_See code: [src/commands/check.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/check.ts)_

## `mynewcli child`

```
USAGE
  $ mynewcli child

OPTIONS
  --stage=
  --stage2=
```

_See code: [src/commands/child.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/child.ts)_

## `mynewcli goodbye`

```
USAGE
  $ mynewcli goodbye
```

_See code: [src/commands/goodbye.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/goodbye.ts)_

## `mynewcli hello [FILE]`

describe the command here

```
USAGE
  $ mynewcli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mynewcli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/hello.ts)_

## `mynewcli help [COMMAND]`

display help for mynewcli

```
USAGE
  $ mynewcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `mynewcli init [FILE]`

describe the command here

```
USAGE
  $ mynewcli init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/init.ts)_

## `mynewcli multiquestions [FILE]`

describe the command here

```
USAGE
  $ mynewcli multiquestions [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/multiquestions.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/multiquestions.ts)_

## `mynewcli test [SECONDARG]`

```
USAGE
  $ mynewcli test [SECONDARG]
```

_See code: [src/commands/test.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/test.ts)_
<!-- commandsstop -->