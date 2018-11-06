import { CommandLineDefinitions } from './command-line.interface';
import { cyan } from 'colors/safe';

export const OPTIONS_DEFINITIONS: CommandLineDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'name', type: String },
  { name: 'spec', type: String },
  { name: 'directory', type: String },
  { name: 'folder-name', type: String },
  { name: 'plopfile', type: String }
];

export const PARSE_OPTIONS = {
  camelCase: true,
  stopAtFirstUnknown: true
};

export const HEADER = `

  ▓█▓▒▒▒▒▒▒▒▒▒▒██░   ▓█▒░░░░░░░░░░░░░  ░▒▒▒▒▒██░ ░██▒▒▒▒▒░  ░██▓▒▒▒▒▒▒▒▒▒▒▒▒░
 ░█░░██████████░░█  ░█░▒█████████████  ░█████░▒█ █▓░█████▒  ██ █████████████▓
 ░█ ▓█        █░░█  ░█ ▓▓                  ░█░▒█ █▓░█░      ██ █░
 ░█ ▓█        █░░█  ░█ ▓▓                  ░█░▒█░█▓░█░      ██ █░
 ░█ ▓█        █░░█  ░█ ▓▓   ░▓▓▓▓▓▓██      ░█░░▓▓▓░░█░      ▓█ ░▓▓▓▓▓▓▓▓▓███
 ░█ ▓█        █░░█  ░█ ▓▓   ░█████░░█      ░█░░███▒░█░       ▒████████████ █▒
 ░█ ▓█        █░░█  ░█ ▓▓       ░█░░█      ░█░▒█ █▓░█░                  ▓█ █▓
 ░█ ▓█        █░░█  ░█ ▓▓       ░█░░█      ░█░▒█ █▓░█░                  ▓█ █▓
 ░█ ▓█        █░░█  ░█░░█████████▓ ░█  ░████▓ ▓█ ██ ▓████▒  █████████████▒░█▒
 ░█ ▓█        █░░█   ░███████████████  ░██████▓   ▒██████▒  ███████████████░

`;

export const HELP_SECTIONS = [
  {
    content: cyan(HEADER),
    raw: true
  },
  {
    header: 'NGXS CLI',
    content: [
      '$ ngxs {bold --name} {underline name} {bold --spec} {underline boolean} {bold --directory} {underline path} {bold --folder-name} {underline name}',
      '$ ngxs {bold --help}'
    ]
  },
  {
    header: 'Options',
    optionList: [
      {
        name: cyan('name'),
        typeLabel: '{underline name}',
        description: 'Store name'
      },
      {
        name: cyan('directory'),
        typeLabel: '{underline path}',
        description: 'By default, the prompt is set to the current directory'
      },
      {
        name: cyan('folder-name'),
        typeLabel: '{underline name}',
        description: 'Use your own folder name, default: state'
      },
      {
        name: cyan('spec'),
        typeLabel: '{underline boolean}',
        description: 'Creates a spec file for store, default: true'
      }
    ]
  },
  {
    header: 'Custom template generator',
    content: ['$ ngxs {bold --plopfile} {underline path}']
  }
];
