import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import * as fuzzy from 'fuzzy'

var colors = ['iam', 's3', 'lambda', 'elb', 'alb', 'ec2', 'cloudwatch', 'macie', 'quicksight', 'randomproduct'];
inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));


export default class Checkbox extends Command {
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
    inquirer.prompt([{
      type: 'checkbox-plus',
      name: 'colors',
      message: 'Enter colors',
      pageSize: 5,
      highlight: true,
      searchable: true,
      source: function (answersSoFar:any, input:any) {

        input = input || '';

        return new Promise(function (resolve) {

          var fuzzyResult = fuzzy.filter(input, colors);

          var data = fuzzyResult.map(function (element) {
            return element.original;
          });

          resolve(data);

        }); 
      }
    }]).then(function (answers) {

      console.log(answers.colors);

    });

    
  }
}
