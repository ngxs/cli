export const PLOP_GENERATOR_NAME = 'ngxs-cli';
export const DEFAULT_CONFIG = '../plop-helpers/plopfile.js';
export const DEFAULT_USAGE_SPEC = true;

export interface Changes {
  type: string;
  path: string;
}

export interface Failures {
  type: string;
  error: string;
}

export interface GeneratorResults {
  changes: Changes[];
  failures: Failures[];
}
