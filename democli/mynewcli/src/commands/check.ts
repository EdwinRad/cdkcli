import { Command, flags } from '@oclif/command'
import { exec } from 'child_process'
import * as inquirer from 'inquirer'


export default class Check extends Command {
  static description = 'describe the command here'

  async run() {
    inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'packages',
          message: 'Choose packages to install:',
          choices: [
            's3', 'iam', 'lambda', 'ec2',
          ],
        },
      ])
      .then(answers => {
        var version = "@1.32.1";
        let packages = answers.packages;
        var packages1:any = []

        function best1() {
          for (var i of packages) {
            packages1.push( "@aws-cdk/aws-" + i + version);
            
          }
        }
        best1()
        var packages2 = packages1.join(" ")

        // function best1(answer1: any) {
        //   for (var answer1 of answer) {
        //     var best = answer1 + version;
        //     return best
        //   }
        // }
        // answer.forEach(function (value: any) {
        //   var answer1 = value + version;
        //   return answer1
        // });
        console.log(packages2)

        // exec('npm install ' + answer2, function (error, stdout, stderr) {
        //   if (error) {
        //     console.log(error.stack);
        //     console.log('Error code: ' + error.code);
        //     console.log('Signal received: ' + error.signal);
        //   }
        //   console.log(stdout);
        //   console.log(stderr);
        // })
      })}}
