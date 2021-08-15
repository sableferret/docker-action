import fs from 'fs';

const writeFile = (path: string, json: string): void => {

    let fileContent = JSON.stringify(json);

    fileContent = JSON.parse(fileContent)

    fs.writeFile(path, fileContent, function (error) {

        if (error) {
            throw error
        }
    });
};

export {
    writeFile
};
