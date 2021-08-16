import StyleDictionary, { Config } from 'style-dictionary';

const transformTokens = (config: Config) => {

  StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    matcher: (token) => {
      return token.unit === 'pixel' && token.value !== 0;
    },
    transformer: (token) => {
      return `${token.value}px`;
    },
  });

  StyleDictionary.registerTransform({
    name: 'size/percent',
    type: 'value',
    matcher: (token) => {
      return token.unit === 'percent' && token.value !== 0;
    },
    transformer: (token) => {
      return `${token.value}%`;
    },
  });

  StyleDictionary.registerTransformGroup({
    name: 'custom/css',
    transforms: (StyleDictionary.transformGroup['css'].transforms || []).concat([
      'size/px',
      'size/percent',
    ]),
  });

  StyleDictionary.registerTransformGroup({
    name: 'custom/less',
    transforms: (StyleDictionary.transformGroup['less'].transforms || []).concat([
      'size/px',
      'size/percent',
    ]),
  });

  StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: (StyleDictionary.transformGroup['less'].transforms || []).concat([
      'size/px',
      'size/percent',
    ]),
  });

  const StyleDictionaryExtended = StyleDictionary.extend(config);

  StyleDictionaryExtended.buildAllPlatforms();
};

export { transformTokens };
