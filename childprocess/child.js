const { exec } = require('child_process');
const package = 'aws-iam'
const version = '@1.42.1'
const ls = exec('npm install @aws-cdk/'+ package+version, function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    // console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);
});
