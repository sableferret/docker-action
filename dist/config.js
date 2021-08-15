"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const platforms_1 = require("./platforms");
const build = (tokensDir, buildPath, types) => {
    const platformMapping = {
        'css': platforms_1.css,
        'less': platforms_1.less,
        'scss': platforms_1.scss,
        'ios': platforms_1.ios
    };
    const platforms = types.reduce((agg, curr) => {
        agg[curr] = platformMapping[curr](buildPath);
        return agg;
    }, {});
    return {
        source: [`${tokensDir}/*.json`],
        platforms
    };
};
exports.build = build;
//# sourceMappingURL=config.js.map