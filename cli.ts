#!/usr/bin/env node
import figlet = require('figlet');
import chalk = require('chalk');
console.log(
    chalk.green(figlet.textSync('Supera Kit CLI', { horizontalLayout: 'full' }))
);

const { exec } = require('child_process');

const getArgs = () => {
    const [, , ...args] = process.argv;
    return args;
};

const command = getArgs().join(' ');

// console.log(`yarn ${command}`);
exec(`yarn ${command}`, (err: any, stdout: any, stderr: any) => {
    console.log('done');
    if (err) {
        chalk.red(`${new Date().toISOString()}:`);
        chalk.red(err);
    } else if (stderr) {
        chalk.red(`${new Date().toISOString()}:`);
        chalk.red(stderr);
    } else {
        chalk.green(`${new Date().toISOString()}:${stdout}`);
    }
});
