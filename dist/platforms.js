"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scss = exports.less = exports.ios = exports.css = void 0;
const cssBase = (buildDir, category) => {
    return {
        transformGroup: `custom/${category}`,
        buildPath: `${buildDir}/${category}/`,
        files: [
            {
                destination: `_variables.${category}`,
                format: `${category}/variables`,
            },
        ],
    };
};
const css = (buildDir) => cssBase(buildDir, 'css');
exports.css = css;
const less = (buildDir) => cssBase(buildDir, 'less');
exports.less = less;
const scss = (buildDir) => cssBase(buildDir, 'scss');
exports.scss = scss;
const ios = (buildDir) => {
    return {
        transformGroup: 'ios',
        buildPath: `${buildDir}/ios/`,
        files: [
            {
                destination: 'StyleDictionaryColor.h',
                format: 'ios/colors.h',
                filter: {
                    type: 'color',
                },
            },
            {
                destination: 'StyleDictionaryColor.m',
                format: 'ios/colors.m',
                filter: {
                    type: 'color',
                },
            },
            {
                destination: 'StyleDictionarySize.h',
                format: 'ios/static.h',
                filter: {
                    type: 'number',
                },
            },
            {
                destination: 'StyleDictionarySize.m',
                format: 'ios/static.m',
                filter: {
                    type: 'number',
                },
            },
        ],
    };
};
exports.ios = ios;
//# sourceMappingURL=platforms.js.map