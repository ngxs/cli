import * as commandLineArgs from 'command-line-args';
import * as commandLineUsage from 'command-line-usage';
import { ArgvTable, CommandLineDefinitions } from './command-line.interface';
import { HELP_SECTIONS, PARSE_OPTIONS } from './command-line.config';
import { red } from 'colors/safe';

export class CommandLine {
  private static argv;

  public static async parse(definitions: CommandLineDefinitions): Promise<ArgvTable> {
    const argv = commandLineArgs(definitions, PARSE_OPTIONS);
    this.argv = this.validate(argv);
    return this.argv;
  }

  public static help(): void {
    console.log(commandLineUsage(HELP_SECTIONS));
    process.exit();
  }

  public static setArgument(key: string, value: string): void {
    const argv = [];
    let withoutIndex = null;

    process.argv.forEach((val, index) => {
      if (val === key) {
        withoutIndex = index + 1;
      } else if (index !== withoutIndex) {
        argv.push(val);
      }
    });

    argv.push(key, value);
    process.argv = argv;
  }

  private static validate(argv): void {
    const UNKNOWN_COMMAND = argv['_unknown'];
    if (UNKNOWN_COMMAND) {
      const errorMessage = `${red('[ERROR]:')} UNKNOWN_COMMAND ${JSON.stringify(UNKNOWN_COMMAND)}`;
      throw new Error(errorMessage);
    }

    return argv;
  }
}
