import { execute } from './engine';

var callerArgs = process.argv.slice(2);
if (callerArgs.length < 2) {
    throw new Error('Insufficient arguments');
}

const tokensJSON = callerArgs[0];
const types = callerArgs[1];

const tokensDirectory = 'tokens';
const buildDirectory = '/data';

execute(tokensJSON, types, tokensDirectory, buildDirectory);


