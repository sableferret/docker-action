import { AssetTypeValues } from "./types";

const validateString = (name: string, val: any): void => {
    if (typeof val !== 'string') {
        throw new Error(`${name}: Invalid argument type`);
    }
    if (val.length === 0) {
        throw new Error(`${name}: Empty value`);
    }
};

const validateTokenTypes = (tokenTypes: any): void => {

    const name = 'tokens';
    validateString(name, tokenTypes);

    (tokenTypes as string).split(',')
        .map(t => t.trim())
        .forEach(t => {
            if (!(t in AssetTypeValues)) {
                throw new Error(`${name}: '${t}' is not a valid asset type`);
            }
        });
};

export {
    validateString,
    validateTokenTypes
}