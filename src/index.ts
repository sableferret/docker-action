import { execute } from './engine';

var callerArgs = process.argv.slice(2);
if (callerArgs.length < 3) {
    throw new Error('Insufficient arguments');
}

const tokensJSON = callerArgs[0];
const types = callerArgs[1];

const tokensDirectory = 'jsontokens';
const buildDirectory = callerArgs[2];

execute(tokensJSON, types, tokensDirectory, buildDirectory);


