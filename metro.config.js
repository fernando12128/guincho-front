const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.blockList = [
  /node_modules\/.*\/node_modules\/react-native\/.*/, // Bloqueia react-native duplicado
  /.*\/__fixtures__\/.*/, // Bloqueia pastas __fixtures__
  /.*\/website\/.*/, // Bloqueia pastas de documentação
  /.*\/docs\/.*/, // Bloqueia outras pastas de docs
  /.*\/.expo\/.*/, // Bloqueia cache do Expo
];

module.exports = defaultConfig
