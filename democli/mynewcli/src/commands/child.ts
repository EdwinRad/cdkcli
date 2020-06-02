import { Command, flags } from '@oclif/command'
import {exec} from 'child_process'
import * as inquirer from 'inquirer'

export class ChildCommand extends Command {

  static flags = {
    stage: flags.string({ options: [] }),
    stage2: flags.string({ options: [] })
  }

  async run() {
    const { flags } = this.parse(ChildCommand)
    let stage = flags.stage
    if (!stage) {
      let responses: any = await inquirer.prompt([{
        name: 'stage',
        message: 'Select a language',
        type: 'list',
        choices: [{ name: 'typescript' }, { name: 'python' }],
      }])
      stage = responses.stage
    }
    this.log(`the stage is: ${stage}`)

    let stage2 = flags.stage2
    if (!stage2) {
      let responses: any = await inquirer.prompt([{
        name: 'stage2',
        message: 'Type a CDK version:(latest default)',
        type: 'input',
      }])
      stage2 = responses.stage2
    }
    this.log(`the stage is: ${stage2}`)

  exec('npm install aws-cdk@'+stage2, function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
      }
      console.log(stdout);
      console.log(stderr);
    exec('cdk init -l ' + stage, function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
      }
      console.log(stdout);
      console.log(stderr);
    });
    });


  }
}  

