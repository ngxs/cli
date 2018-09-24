import { ArgvTable } from '../../src/command-line-parser/command-line.interface';

export const cliArgv: ArgvTable = {
  name: 'App',
  directory: 'temp',
  folderName: 'state',
  spec: 'true'
};

export const generatedFiles = {
  state: `${cliArgv.directory}/${cliArgv.folderName}/app.state.ts`,
  actions: `${cliArgv.directory}/${cliArgv.folderName}/app.actions.ts`,
  spec: `${cliArgv.directory}/${cliArgv.folderName}/app.state.spec.ts`
};

export const expectedFiles = {
  state: `tests/helpers/expectFiles/app.state.ts.tpl`,
  actions: `tests/helpers/expectFiles/app.actions.ts.tpl`,
  spec: `tests/helpers/expectFiles/app.state.spec.ts.tpl`
};
