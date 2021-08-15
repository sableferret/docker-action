"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenTypes = exports.validateString = void 0;
const types_1 = require("./types");
const validateString = (name, val) => {
    if (typeof val !== 'string') {
        throw new Error(`${name}: Invalid argument type`);
    }
    if (val.length === 0) {
        throw new Error(`${name}: Empty value`);
    }
};
exports.validateString = validateString;
const validateTokenTypes = (tokenTypes) => {
    const name = 'tokens';
    validateString(name, tokenTypes);
    tokenTypes.split(',')
        .map(t => t.trim())
        .forEach(t => {
        if (!(t in types_1.AssetTypeValues)) {
            throw new Error(`${name}: '${t}' is not a valid asset type`);
        }
    });
};
exports.validateTokenTypes = validateTokenTypes;
//# sourceMappingURL=args.js.map