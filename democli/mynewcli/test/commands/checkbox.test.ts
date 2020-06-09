import {expect, test} from '@oclif/test'

describe('checkbox', () => {
  test
  .stdout()
  .command(['checkbox'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['checkbox', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
