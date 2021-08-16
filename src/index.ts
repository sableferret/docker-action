import * as core from '@actions/core';
import { v4 as uuidv4 } from 'uuid';

import { execute } from './engine';

const tokensJSON = core.getInput('tokens-json');
const types = core.getInput('token-types');

const tokensDirectory = uuidv4();
const buildDirectory = core.getInput('results-dir');

execute(tokensJSON, types, tokensDirectory, buildDirectory);


