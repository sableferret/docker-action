import { AssetType } from 'types';
import { writeFile } from './tokens';
import { transformTokens } from './transform-tokens';

// TODO: Error checking
var callerArgs = process.argv.slice(2);

console.log('Getting calling context');
const tokensJSON = callerArgs[0];
const buildDirectory = callerArgs[1];
const assetTypes = callerArgs[2];

const tokensDirectory = 'tokens';

console.log('Writing tokens JSON to local file');
writeFile(tokensDirectory, tokensJSON);

console.log('Transforming tokens to CSS-type assets');
transformTokens(buildDirectory, assetTypes.split(',') as AssetType[]);
