import {Command, flags} from '@oclif/command'

export default class Subs extends Command {
  static description = 'describe the command here'

  async run() {
    var mystring = "lambda-events-targets";
    mystring = mystring.replace('-', '').replace('-', '');

    console.log(mystring)
  }
}
