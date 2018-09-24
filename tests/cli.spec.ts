import { GeneratorResults } from '../src/cli-executor/cli-executor.config';
import { NgxsCliExecutor } from '../src/cli-executor/cli-executor.class';
import { readFile, removeDirectory } from './helpers/utils';
import { cliArgv, expectedFiles, generatedFiles } from './helpers/config';
import { expect } from 'chai';
import 'mocha';

describe('NgxsCli', () => {
  let cliOutput: GeneratorResults = null;

  before(async () => (cliOutput = await NgxsCliExecutor.execNodePlop(cliArgv)));

  it('Check that abortOnFail:false', async () => {
    const abortOnFail: boolean = Boolean(cliOutput.failures.length);
    expect(abortOnFail).to.equal(false);
  });

  it('Check correctly generated template app.actions.ts', () => {
    expect(readFile(expectedFiles.actions)).to.equal(readFile(generatedFiles.actions));
  });

  it('Check correctly generated template app.state.ts', () => {
    expect(readFile(expectedFiles.state)).to.equal(readFile(generatedFiles.state));
  });

  it('Check correctly generated template app.state.spec.ts', () => {
    expect(readFile(expectedFiles.spec)).to.equal(readFile(generatedFiles.spec));
  });

  after(() => removeDirectory(cliArgv.directory));
});
