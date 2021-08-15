import { Platform } from 'style-dictionary';
import { AssetType } from 'types';

const cssBase = (buildDir: string, category: AssetType): Platform => {
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

const css = (buildDir: string): Platform => cssBase(buildDir, 'css');
const less = (buildDir: string): Platform => cssBase(buildDir, 'less');
const scss = (buildDir: string): Platform => cssBase(buildDir, 'scss');

const ios = (buildDir: string): Platform => {
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

export { css, ios, less, scss };
