"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformTokens = void 0;
const style_dictionary_1 = __importDefault(require("style-dictionary"));
const transformTokens = (config) => {
    style_dictionary_1.default.registerTransform({
        name: 'size/px',
        type: 'value',
        matcher: (token) => {
            return token.unit === 'pixel' && token.value !== 0;
        },
        transformer: (token) => {
            return `${token.value}px`;
        },
    });
    style_dictionary_1.default.registerTransform({
        name: 'size/percent',
        type: 'value',
        matcher: (token) => {
            return token.unit === 'percent' && token.value !== 0;
        },
        transformer: (token) => {
            return `${token.value}%`;
        },
    });
    style_dictionary_1.default.registerTransformGroup({
        name: 'custom/css',
        transforms: (style_dictionary_1.default.transformGroup['css'].transforms || []).concat([
            'size/px',
            'size/percent',
        ]),
    });
    style_dictionary_1.default.registerTransformGroup({
        name: 'custom/less',
        transforms: (style_dictionary_1.default.transformGroup['less'].transforms || []).concat([
            'size/px',
            'size/percent',
        ]),
    });
    style_dictionary_1.default.registerTransformGroup({
        name: 'custom/scss',
        transforms: (style_dictionary_1.default.transformGroup['less'].transforms || []).concat([
            'size/px',
            'size/percent',
        ]),
    });
    const StyleDictionaryExtended = style_dictionary_1.default.extend(config);
    // const StyleDictionaryExtended = StyleDictionary.extend('mock/config.json');
    StyleDictionaryExtended.buildAllPlatforms();
};
exports.transformTokens = transformTokens;
//# sourceMappingURL=transform-tokens.js.map