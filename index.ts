import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';
import { files } from './src/lib/helpers/file';

clear();

console.log(
    chalk.yellow(figlet.textSync('Lk-Cli', { horizontalLayout: 'full' }))
);
