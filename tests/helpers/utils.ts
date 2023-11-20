import * as path from 'path';
import { rimraf } from 'rimraf';
import * as fs from 'fs';

export function readFile(relativePath: string) {
  return fs.readFileSync(path.resolve(relativePath)).toString();
}

export function removeDirectory(relativePath: string) {
  rimraf(path.resolve(relativePath)).then(() => console.log('[DONE]'));
}
