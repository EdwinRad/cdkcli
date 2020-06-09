import {Command, flags} from '@oclif/command'
import { exec } from 'child_process'
import * as inquirer from 'inquirer'


export default class Multi extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    inquirer
      .prompt([
        {
          name: 'faveReptile',
          message: 'What is your favorite reptile?',
          default: 'Alligators, of course!',
        },
        {
          name: 'faveColor',
          message: 'What is your favorite color?',
          default: '#008f68',
        },
      ])
      .then(answers => {
        console.info('Answers:', answers);
      });
  }
}
