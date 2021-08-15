import { Config } from 'style-dictionary';

import { build } from './config';
import { AssetType } from './types';

describe('Given token setup configuration', () => {

    const testCases: {
      when: string;
      then: string;
      tokensDir: string;
      assetsDir: string;
      types: AssetType[];
      expected: Config;
    }[] = [
      {
        when: "CSS type",
        then: "should equal",
        tokensDir: "mockTokensdir",
        assetsDir: "mockAssetsdir",
        types: ["css"],
        expected: {
          source: ["mockTokensdir/*.json"],
          platforms: {
            css: {
              transformGroup: "custom/css",
              buildPath: "mockAssetsdir/css/",
              files: [
                {
                  destination: "_variables.css",
                  format: "css/variables",
                },
              ],
            },
          },
        },
      },
      {
        when: "LESS type",
        then: "should equal",
        tokensDir: "mockTokensdir",
        assetsDir: "mockAssetsdir",
        types: ["less"],
        expected: {
          source: ["mockTokensdir/*.json"],
          platforms: {
            less: {
              transformGroup: "custom/less",
              buildPath: "mockAssetsdir/less/",
              files: [
                {
                  destination: "_variables.less",
                  format: "less/variables",
                },
              ],
            },
          },
        },
      },
      {
        when: "scss type",
        then: "should equal",
        tokensDir: "mockTokensdir",
        assetsDir: "mockAssetsdir",
        types: ["scss"],
        expected: {
          source: ["mockTokensdir/*.json"],
          platforms: {
            scss: {
              transformGroup: "custom/scss",
              buildPath: "mockAssetsdir/scss/",
              files: [
                {
                  destination: "_variables.scss",
                  format: "scss/variables",
                },
              ],
            },
          },
        },
      }, 
      {
        when: "css AND scss type",
        then: "should equal",
        tokensDir: "mockTokensdir",
        assetsDir: "mockAssetsdir",
        types: ["css", "scss"],
        expected: {
          source: ["mockTokensdir/*.json"],
          platforms: {
            css: {
                transformGroup: "custom/css",
                buildPath: "mockAssetsdir/css/",
                files: [
                  {
                    destination: "_variables.css",
                    format: "css/variables",
                  },
                ],
            },              
            scss: {
              transformGroup: "custom/scss",
              buildPath: "mockAssetsdir/scss/",
              files: [
                {
                  destination: "_variables.scss",
                  format: "scss/variables",
                },
              ],
            },
          },
        },
      },               
    ];

    testCases.forEach( ({ when, then, tokensDir, assetsDir, types, expected }) => {

        describe(`When ${when}`, () => {
            let result: Config;
            beforeEach(() => { result = build(tokensDir, assetsDir, types)});

            it(`Then ${then}`, () => {
                expect(result).toEqual(expected);
            });
        });
    });

});