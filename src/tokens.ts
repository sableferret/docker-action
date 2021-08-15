import fs from 'fs';
import path from 'path';

const writeFile = (dir: string, json: string): void => {

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    const tokensFile = path.join(dir, 'tokens.json');

    console.log(`Attempt to write tokens file to ${tokensFile}`);
    fs.writeFileSync(tokensFile, json);
};

export {
    writeFile
};
