import { Config } from 'style-dictionary';

import './testing.json';
import { transformTokens } from './transform-tokens';

describe('transform-tokens', () => {
    const testCases: {
        when: string;
        then: string;
        config: Config;
        expected: string;
    }[] = [];

    testCases.forEach(({when, then, config, expected}) => {
        describe(`When ${when}`, () => {
            beforeEach(() => {
                transformTokens(config);
            });
            it(`Then ${then}`, () => {

            });
        });
    });
});