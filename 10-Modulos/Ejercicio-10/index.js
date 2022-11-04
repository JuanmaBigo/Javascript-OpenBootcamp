import {suma, multiplica} from "./controller.js"

import chalk from 'chalk';
const log = console.log;

const result = multiplica(suma(1,2), suma(4,5));

log(chalk.green(result));