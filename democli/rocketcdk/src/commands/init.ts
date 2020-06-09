import { Command } from '@oclif/command'
import cli from 'cli-ux'
import { exec } from 'child_process'
import * as inquirer from 'inquirer'
import * as fuzzy from 'fuzzy'
inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));

var packages = ['iam', 's3', 'lambda', 'elasticloadbalancing', 'elasticloadbalancingv2', 'ec2', 'cloudwatch', 'amplify', 'appconfig'];



export default class Init extends Command {
  static description = 'Initializes your AWS-CDK app and installs CDK-packages that you can choose.'

  async run() {
    inquirer
      .prompt([
        {
          name: 'language',
          message: 'Select a language:',
          type: 'list',
          choices: [{ name: 'typescript' }],
        },
        {
          name: 'version',
          message: 'Type a CDK version:(latest default)',
          type: 'input',
        },
        {
          type: 'checkbox-plus',
          name: 'packages',
          message: 'Choose packages to install:',
          pageSize: 5,
          highlight: true,
          searchable: true,
          source: function (answersSoFar: any, input: any) {

            input = input || '';

            return new Promise(function (resolve) {

              var fuzzyResult = fuzzy.filter(input, packages);

              var data = fuzzyResult.map(function (element) {
                return element.original;
              });

              resolve(data);

            });
          }
        }
      ])
      .then(answers => {
        if (answers.version === "") {
        }
        else{
          answers.version = "@" + answers.version
        }
        let packages = answers.packages;
        var packages1: any = []

        function best1() {
          for (var i of packages) {
            packages1.push("@aws-cdk/aws-" + i + answers.version);
          }
        }
        best1()
        var packages2 = packages1.join(" ")
        cli.action.start('Initializing your CDK project in ' + answers.language)
        exec('cdk init -l ' + answers.language, function (error, stdout, stderr) {
          if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
          }
          console.log(stdout);
          console.log(stderr);
          cli.action.stop()
          cli.action.start('Installing aws-cdk packages')
          exec('npm install aws-cdk' + answers.version + ' @aws-cdk/core' + answers.version + ' @aws-cdk/assert' + answers.version , function (error, stdout, stderr) {
            if (error) {
              console.log(error.stack);
              console.log('Error code: ' + error.code);
              console.log('Signal received: ' + error.signal);
            }
            console.log(stdout);
            console.log(stderr);
            exec('npm install ' + packages2, function (error, stdout, stderr) {
              if (error) {
                console.log(error.stack);
                console.log('Error code: ' + error.code);
                console.log('Signal received: ' + error.signal);
              }
              // console.log(stdout);
              // console.log(stderr);
              cli.action.stop('Installed these packages:' + stdout)
            }
            )
          })

        })
      });

  }
}
