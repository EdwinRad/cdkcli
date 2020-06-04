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
        var answer1:any = []

        function best1() {
          for (var i of answer) {
            answer1.push( i + version);
            
          }
        }
        best1()
        var answer2 = answer1.join(" ")

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
        

        exec('npm install ' + answer2, function (error, stdout, stderr) {
          if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
          }
          console.log(stdout);
          console.log(stderr);
        })
      })}}
