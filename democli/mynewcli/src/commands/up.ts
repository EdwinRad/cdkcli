import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import { exec } from 'child_process'
import cli from 'cli-ux'
import * as chalk from 'chalk'

export default class Up extends Command {
  static description = 'Updates your CDK packages to your favourite version.'

  static flags = {
    version: flags.string({ char: 'v', description: 'input a version: RocketCDK up -v 1.50.0', default: 'latest' }),
  }
  

  async run() {
    function update() {
      // Check if TS or Python
      if (fs.existsSync('package.json')) {
        //TS
        cli.action.start('3, 2, 1, zero. All engines running, updating CDK packages...')
        var packages1: any = []
        fs.readFile('package.json', (err, data: any) => {
          if (err) throw err;
          let packages = JSON.parse(data);
          let pack = packages.dependencies
          for (var key in pack) {
            packages1.push(key);
          }
          filtercdkpackages(packages1)
        });
        function filtercdkpackages(packages1: any) {
          const filterBy = (str: string) => packages1.filter(
            (item: string) => new RegExp('^' + str.replace(/\*/g, '.*') + '$').test(item)
          );
          var installpackages1: any = []
          var filtered = filterBy('@aws-cdk*')
          function installpackages() {
            for (var i of filtered) {
              installpackages1.push(i + '@' + flags.version);
            }
          }
          installpackages()
          var installpackages2 = installpackages1.join(" ")
          exec('npm install @types/jest aws-cdk@' + flags.version + ' @aws-cdk/assert@' + flags.version, function (error, stdout, stderr) {
            if (error) {
              throw new Error(error.message);
            }
            console.log(stdout);
            exec('npm install ' + installpackages2, function (error, stdout, stderr) {
              if (error) {
                throw new Error(error.message);
              }
              console.log(stdout);
              console.log(stderr);
              cli.action.stop(chalk.cyan(`LIFTOFF. We have a liftoff. Liftoff on CDK @${flags.version}.`))
            })
          });

        };
      }
      //Python
      else if (fs.existsSync('setup.py')) {
        //If latest:
        if (flags.version == 'latest') {
          cli.action.start('3, 2, 1, zero. All engines running, updating CDK packages...')
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
                exec('pip install -r requirements.txt -U', function (error, stdout, stderr) {
                  if (error) {
                    throw new Error(error.message);
                  }
                  console.log(stdout);
                  cli.action.stop(chalk.cyan(`LIFTOFF. We have a liftoff. Liftoff on CDK @latest.`))
                });
              });
            });
          })
        }
        else{
          //If version specified
          cli.action.start('3, 2, 1, zero. All engines running, updating CDK packages...')
          exec('pip freeze > requirements.txt', function (error, stdout, stderr) {
            if (error) {
              throw new Error(error.message);
            }
            fs.readFile('requirements.txt', 'utf8', function read(err, data) {
              if (err) throw err;
              let regexp = /(aws-cdk.+)/g;
              let result: any = data.match(regexp)
              for (var i of result) {
                let datareplaced = i.split("1")[0] + flags.version;
                data = data.replace(i, datareplaced)
              }
              fs.writeFile('requirements.txt', data, function (err) {
                if (err) throw err;
                exec('pip install -r requirements.txt -U', function (error, stdout, stderr) {
                  if (error) {
                    throw new Error(error.message);
                  }
                  console.log(stdout);
                  cli.action.stop(chalk.cyan(`LIFTOFF. We have a liftoff. Liftoff on CDK @${flags.version}.`))
                });
              });
            });
          })
        }
      }
    }

    const { flags } = this.parse(Up)
    //Input Validation
    var validation:any = flags.version
    var regex = /^\d\.\d\d\.\d$/g ;
    if (regex.test(validation)) {
      update()
    } 
    else if (flags.version == 'latest'){
      update()
    }
    //If validation fails throw error
    else {
      throw new Error('The version you provided is not in the correct format. Please specify a version: 1.50.0')
    }
  }
}
