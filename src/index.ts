import * as core from '@actions/core';
import { execute } from './engine';

const tokensJSON = core.getInput('tokens-json');
const types = core.getInput('token-types');

const tokensDirectory = 'jsontokens';
const buildDirectory = core.getInput('results-dir');

execute(tokensJSON, types, tokensDirectory, buildDirectory);


