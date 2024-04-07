/* eslint-disable prettier/prettier */
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/'],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json']
  },
};
