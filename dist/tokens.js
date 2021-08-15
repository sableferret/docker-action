"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const writeFile = (dir, json) => {
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir, { recursive: true });
    }
    const tokensFile = path_1.default.join(dir, 'tokens.json');
    console.log(`Attempt to write tokens file to ${tokensFile}`);
    fs_1.default.writeFileSync(tokensFile, json);
};
exports.writeFile = writeFile;
//# sourceMappingURL=tokens.js.map