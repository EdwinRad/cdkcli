import {expect, test} from '@oclif/test'

describe('testcommand', () => {
  test
  .stdout()
  .command(['testcommand'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['testcommand', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
