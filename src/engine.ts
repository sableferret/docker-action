import { writeFile } from "./tokens";
import { validateString, validateTokenTypes } from "./args";
import { transformTokens } from "./transform-tokens";
import { build } from "./config";
import { AssetType } from "./types";

const execute = (tokensJSON: string, types: string, tokensDirectory: string, buildDirectory: string ) => {
    
    validateString('json', tokensJSON);
    validateTokenTypes(types);

    writeFile(tokensDirectory, tokensJSON);

    const assetTypes = types.split(',') as AssetType[];
    const config = build(tokensDirectory, buildDirectory, assetTypes);

    console.log('config', config);

    transformTokens(config);
}

export {
    execute
}
