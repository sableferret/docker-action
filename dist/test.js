"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("./engine");
const tokensJSON = require('../test-data/testing.json');
var callerArgs = process.argv.slice(2);
const types = callerArgs[0];
const tokensDirectory = 'mock/tokens';
const buildDirectory = 'mock/data';
engine_1.execute(JSON.stringify(tokensJSON), types, tokensDirectory, buildDirectory);
//# sourceMappingURL=test.js.map