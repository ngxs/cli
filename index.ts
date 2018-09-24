import { CommandLine } from './src/command-line-parser/command-line.class';
import { OPTIONS_DEFINITIONS } from './src/command-line-parser/command-line.config';
import { ArgvTable } from './src/command-line-parser/command-line.interface';
import { NgxsCliExecutor } from './src/cli-executor/cli-executor.class';

CommandLine
    .parse(OPTIONS_DEFINITIONS)
    .then((argv: ArgvTable) => {
        if (argv.help) {
            CommandLine.help();
        } else {
            NgxsCliExecutor.run(argv);
        }
    }).catch((e: Error) => {
    console.error(e.message);
    CommandLine.help();
});
