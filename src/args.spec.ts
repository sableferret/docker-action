import { validateString, validateTokenTypes } from './args';

describe('Given argument validator', () => {
    describe('as string validator', () => {
        const argName = 'mock';
        const testCases: {
            when: string;
            then: string;
            testValue: any;
            expectedExceptionMessage?: string;
          }[] = [{
              when: 'Null string',
              then: 'should throw',
              testValue: null,
              expectedExceptionMessage: `${argName}: Invalid argument type`
          }, {
            when: 'undefined string',
            then: 'should throw',
            testValue: undefined,
            expectedExceptionMessage: `${argName}: Invalid argument type`
        }, {
            when: 'arg is not a string',
            then: 'should throw',
            testValue: 123,
            expectedExceptionMessage: `${argName}: Invalid argument type`
        }, {
            when: 'string is empty',
            then: 'should throw empty value',
            testValue: "",
            expectedExceptionMessage: `${argName}: Empty value`
        }, {
            when: 'string is not empty',
            then: 'should not throw',
            testValue: "test"
        }
        ];

        testCases.forEach(({when, then, testValue, expectedExceptionMessage}) => {
            describe(`when ${when}`, () => {
                test(`then ${then}`, () => {
                    if (expectedExceptionMessage) {
                        expect(() => validateString(argName, testValue)).toThrow(expectedExceptionMessage);
                    } else {
                        expect(() => validateString(argName, testValue)).not.toThrow();
                    }
                });
            });
        });
    });
    describe('as asset type validator', () => {
        const testCases: {
            when: string;
            then: string;
            testValue: any;
            expectedExceptionMessage?: string;
          }[] = [
            {
                when: 'string is empty',
                then: 'should throw empty value',
                testValue: "",
                expectedExceptionMessage: `tokens: Empty value`
            },             {
                when: 'invalid token',
                then: 'should throw empty value',
                testValue: "bad",
                expectedExceptionMessage: `tokens: 'bad' is not a valid asset type`
            },             {
                when: 'one valid token',
                then: 'should not throw',
                testValue: "css"
            },{             
                when: 'multiple valid tokens',
                then: 'should not throw',
                testValue: "css, less"
            },{             
                when: 'multiple tokens one invalid',
                then: 'should throw',
                testValue: "css, less, bad",
                expectedExceptionMessage: `tokens: 'bad' is not a valid asset type`
            }
          ];

        testCases.forEach(({when, then, testValue, expectedExceptionMessage}) => {
            describe(`when ${when}`, () => {
                test(`then ${then}`, () => {
                    if (expectedExceptionMessage) {
                        expect(() => validateTokenTypes(testValue)).toThrow(expectedExceptionMessage);
                    } else {
                        expect(() => validateTokenTypes(testValue)).not.toThrow();
                    }
                });
            });
        });
    });
});
