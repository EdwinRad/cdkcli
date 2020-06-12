import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import * as path from 'path'

var prepend = require('prepend');
var packages = ['\nimport * as s3 from "@aws-cdk/aws-s3";', '\nimport * as dynamodb from "@aws-cdk/aws-dynamodb";']
var answer1:any = []
var answer1: any = packages.join(" ")
export default class Write extends Command {
  static description = 'describe the command here'

  async run() {
    var folder = path.basename(path.resolve(process.cwd()))
    // fs.writeFile('../lib/' + folder + '-stack.ts', answer1 , function (err) {
    //   if (err) return console.log(err);
    // });
    prepend('./lib/' + folder + '-stack.ts', answer1, function (err:any) {
      if (err)
        console.error(err.message);
    });

  }
}
