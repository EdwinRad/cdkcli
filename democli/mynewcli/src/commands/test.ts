import Command from '@oclif/command'

export class MyCLI extends Command {
  static args = [
    {
      name: 'firstArg',               // name of arg to show in help and reference with args[name]
      required: false,            // make the arg required with `required: true`
      description: 'output file',
      parse: input => '@aws-cdk/aws-s3', // help description
      hidden: true,               // hide this arg from help   // instead of the user input, return a different value
      options: ['s3', 'S3', 'aws-s3'],           // default value if no arg input       // only allow input to be from a discrete set
    },
    { name: 'secondArg', },
  ]
  static strict = false

  async run() {
    // can get args as an object
    const { args } = this.parse(MyCLI)
    console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
    // can also get the args as an array
    const { argv } = this.parse(MyCLI)
    console.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}