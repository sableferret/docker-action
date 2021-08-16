"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const tokens_1 = require("./tokens");
const args_1 = require("./args");
const transform_tokens_1 = require("./transform-tokens");
const config_1 = require("./config");
const execute = (tokensJSON, types, tokensDirectory, buildDirectory) => {
    args_1.validateString('json', tokensJSON);
    args_1.validateTokenTypes(types);
    tokens_1.writeFile(tokensDirectory, tokensJSON);
    const assetTypes = types.split(',');
    const config = config_1.build(tokensDirectory, buildDirectory, assetTypes);
    transform_tokens_1.transformTokens(config);
};
exports.execute = execute;
//# sourceMappingURL=engine.js.map