"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("./engine");
var callerArgs = process.argv.slice(2);
if (callerArgs.length < 2) {
    throw new Error('Insufficient arguments');
}
const tokensJSON = callerArgs[0];
const types = callerArgs[1];
const tokensDirectory = 'tokens';
const buildDirectory = '/data';
engine_1.execute(tokensJSON, types, tokensDirectory, buildDirectory);
//# sourceMappingURL=index.js.map