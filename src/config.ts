import { Config, Platform } from 'style-dictionary';
import { AssetType } from 'types';
import { css, ios, less, scss } from './platforms';

const build = (tokensDir: string, buildPath: string, types: AssetType[]): Config => {

    const platformMapping: Record<string, (buildDir: string) => Platform> = {
        'css': css,
        'less': less,
        'scss': scss,

        'ios': ios
    }

    const platforms: Record<string, Platform> = 
        types.reduce((agg: Record<string, Platform>, curr: string) => {
            agg[curr] = platformMapping[curr](buildPath);
            return agg;
        }, {});

    return {
        source: [`${tokensDir}/*.json`],
        platforms
    };

}

export {
    build
};
