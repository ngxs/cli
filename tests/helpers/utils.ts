import * as rimraf from 'rimraf';
import * as path from 'path';
import * as fs from 'fs';

export function readFile(relativePath: string) {
  return fs.readFileSync(path.resolve(relativePath)).toString();
}

export function removeDirectory(relativePath: string) {
  rimraf(path.resolve(relativePath), () => {
    console.log('[DONE]');
  });
}
