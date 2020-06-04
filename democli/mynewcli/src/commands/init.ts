import { Command, flags } from '@oclif/command'
import { exec } from 'child_process'
import * as inquirer from 'inquirer'

export default class Init extends Command {
  static description = 'describe the command here'
  static flags = {
    stage: flags.string({ options: [] }),
    stage2: flags.string({ options: [] })
  }


  async run() {

    const { flags } = this.parse(Init)
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

    let stage2 = flags.stage2
    if (!stage2) {
      let responses: any = await inquirer.prompt([{
        name: 'stage2',
        message: 'Type a CDK version:(latest default)',
        type: 'input',
      }])
      stage2 = responses.stage2
    }
    inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'packages',
          message: 'Choose packages to install:',
          choices: [
            '@aws-cdk/aws-s3', '@aws-cdk/aws-iam', '@aws-cdk/aws-lambda', '@aws-cdk/aws-ec2',
          ],
        },
      ])
      .then(answers => {
        var version = stage2;
        let answer = answers.packages;
        var answer1: any = []
        function best1() {
          for (var i of answer) {
            answer1.push(i + version);
          }
        }
        best1()
        var answer2 = answer1.join(" ")


    exec('npm install aws-cdk' + stage2, function (error, stdout, stderr) {
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

      })
      exec('npm install ' + answer2, function (error, stdout, stderr) {
        if (error) {
          console.log(error.stack);
          console.log('Error code: ' + error.code);
          console.log('Signal received: ' + error.signal);
        }
        console.log(stdout);
        console.log(stderr);
      }
      )
    })
    
    });




    }}
