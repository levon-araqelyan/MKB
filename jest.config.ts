import type {Config} from '@jest/types';
const {defaults} = require('jest-config');

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
};
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
};
export default config;
