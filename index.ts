import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';
import { files } from './src/lib/helpers/file';
import { isLiverProject } from './src/lib/helpers/liverKit';
import IArgs from './src/lib/interfaces/IArgs';

clear();

const getArgs = (argv: Array<string>): any => {
    const [, , ...args] = argv;
    console.log(argv);
    args;
};

console.log(
    chalk.yellow(figlet.textSync('Lk-Cli', { horizontalLayout: 'full' }))
);

if (isLiverProject()) {
    const args = getArgs(process.argv);
}
