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
* [`mynewcli checkbox [FILE]`](#mynewcli-checkbox-file)
* [`mynewcli child`](#mynewcli-child)
* [`mynewcli error [FILE]`](#mynewcli-error-file)
* [`mynewcli flags [FILE]`](#mynewcli-flags-file)
* [`mynewcli goodbye`](#mynewcli-goodbye)
* [`mynewcli hello [FILE]`](#mynewcli-hello-file)
* [`mynewcli help [COMMAND]`](#mynewcli-help-command)
* [`mynewcli init`](#mynewcli-init)
* [`mynewcli multi [FILE]`](#mynewcli-multi-file)
* [`mynewcli multiquestions [FILE]`](#mynewcli-multiquestions-file)
* [`mynewcli python`](#mynewcli-python)
* [`mynewcli subs`](#mynewcli-subs)
* [`mynewcli test [SECONDARG]`](#mynewcli-test-secondarg)
* [`mynewcli up [FILE]`](#mynewcli-up-file)
* [`mynewcli update`](#mynewcli-update)
* [`mynewcli write`](#mynewcli-write)

## `mynewcli check`

describe the command here

```
USAGE
  $ mynewcli check
```

_See code: [src/commands/check.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/check.ts)_

## `mynewcli checkbox [FILE]`

describe the command here

```
USAGE
  $ mynewcli checkbox [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/checkbox.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/checkbox.ts)_

## `mynewcli child`

```
USAGE
  $ mynewcli child

OPTIONS
  --stage=
  --stage2=
```

_See code: [src/commands/child.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/child.ts)_

## `mynewcli error [FILE]`

describe the command here

```
USAGE
  $ mynewcli error [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/error.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/error.ts)_

## `mynewcli flags [FILE]`

describe the command here

```
USAGE
  $ mynewcli flags [FILE]

OPTIONS
  -f, --force
  -h, --help             show CLI help
  -n, --name=name        name to print
  -v, --version=version  name to print
```

_See code: [src/commands/flags.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/flags.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `mynewcli init`

Initializes your CDK-app, installs CDK-packages and imports them into your Stack.ts file.

```
USAGE
  $ mynewcli init
```

_See code: [src/commands/init.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/init.ts)_

## `mynewcli multi [FILE]`

describe the command here

```
USAGE
  $ mynewcli multi [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/multi.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/multi.ts)_

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

## `mynewcli python`

describe the command here

```
USAGE
  $ mynewcli python
```

_See code: [src/commands/python.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/python.ts)_

## `mynewcli subs`

describe the command here

```
USAGE
  $ mynewcli subs
```

_See code: [src/commands/subs.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/subs.ts)_

## `mynewcli test [SECONDARG]`

```
USAGE
  $ mynewcli test [SECONDARG]
```

_See code: [src/commands/test.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/test.ts)_

## `mynewcli up [FILE]`

describe the command here

```
USAGE
  $ mynewcli up [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/up.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/up.ts)_

## `mynewcli update`

Update your AWS-CDK version and your CDK-packages versions.

```
USAGE
  $ mynewcli update
```

_See code: [src/commands/update.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/update.ts)_

## `mynewcli write`

describe the command here

```
USAGE
  $ mynewcli write
```

_See code: [src/commands/write.ts](https://github.com/democli/mynewcli/blob/v0.0.0/src/commands/write.ts)_
<!-- commandsstop -->
