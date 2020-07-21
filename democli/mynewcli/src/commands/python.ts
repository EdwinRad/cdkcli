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
        exec('pip freeze > requirements.txt', function (error, stdout, stderr) {
            if (error) {
              throw new Error(error.message);
            }
          fs.readFile('requirements.txt', 'utf8', function read(err, data) {
            if (err) throw err;
            let regexp = /(aws-cdk.+)/g;
            let result: any = data.match(regexp)
            for (var i of result) {
              let datareplaced = i.split("=")[0];
              data = data.replace(i, datareplaced)
            }
            fs.writeFile('requirements.txt', data, function (err) {
              if (err) throw err;
              console.log(data);
            });
          }); 
          })

        //              let datareplaced = i.split("1")[0] + answers.version;


        // var data = fs.readFileSync('requirements.txt', 'utf8')
        // // fs.readFile('requirements.txt', 'utf8', (err, data: any) => {
        // //   if (err) throw err;
        // let regexp = /(aws-cdk.+)/g;
        // let result:any = data.match(regexp)
        // for (var i of result) {
        //   let datareplaced = i.split("1")[0] + answers.version +'",';
        //   data = data.replace(i, datareplaced)
        // }
        // console.log(data)
        // var dumm = 'why?'
        // fs.writeFile('requirements.txt', dumm, function (err) {
        //   // If an error occurred, show it and return
        //   if (err) return console.error(err);
        //   // Successfully wrote to the file!
        // }); 
          // exec('pip install -r requirements.txt', function (error, stdout, stderr) {
          //   if (error) {
          //     throw new Error(error.message);
          //   }
          //   console.log(stdout);
          // }
          // );
        // });
        
        // var data: any
        
      })
    }
}
