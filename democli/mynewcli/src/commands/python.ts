import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import * as _ from "lodash";
import { exec } from 'child_process'
import * as inquirer from 'inquirer'
import * as chalk from 'chalk'

export default class Python extends Command {
  static description = 'describe the command here'

  async run() {
    console.log(chalk.cyan('\nUpdates your CDK packages in package.json to your favourite version.\n '))
    inquirer
      .prompt([
        {
          name: 'version',
          message: 'Type a CDK version that you want your CDK packages + version to be updated to' + chalk.cyan(' (eg: 1.50.0)') + ':',
          type: 'input',
        },
      ])
      .then(answers => {
        fs.readFile('setup.py', 'utf8', (err, data: any) => {
          if (err) throw err;
          let regexp = /(aw.+)/g;
          let result = data.match(regexp)
          for (var i of result) {
            let datareplaced = i.split("1")[0] + answers.version +'",';
            var data = data.replace(i, datareplaced)
          }
          fs.writeFile('setup.py', data, function (err) {
            if (err) {
              return console.log(err);
            }
          }); 
          exec('pip install -r requirements.txt', function (error, stdout, stderr) {
            if (error) {
              throw new Error(error.message);
            }
            console.log(stdout);
          }
          );
        });
      })
    }
}
