import { Command, flags } from '@oclif/command'
import { exec } from 'child_process'
import * as inquirer from 'inquirer'


export default class Check extends Command {
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
          type: 'checkbox',
          name: 'reptiles',
          message: 'Choose packages to install:',
          choices: [
            '@aws-cdk/aws-s3', '@aws-cdk/aws-iam', '@aws-cdk/aws-lambda', '@aws-cdk/aws-ec2',
          ],
        },
      ])
      .then(answers => {
        var version = "@1.32.1";
        let answer = answers.reptiles;

        function best1() {
          for (var answer1 of answer) {
            var best = answer1 + version;
            return best
          }
        }
        best1()

        // answer.forEach(function (value: any) {
        //   var answer1 = value + version;
        //   return answer1
        // });
        
        console.log(best1)
        // exec('npm install ' + answer1, function (error, stdout, stderr) {
        //   if (error) {
        //     console.log(error.stack);
        //     console.log('Error code: ' + error.code);
        //     console.log('Signal received: ' + error.signal);
        //   }
        //   console.log(stdout);
        //   console.log(stderr);
        // })
      })}}
