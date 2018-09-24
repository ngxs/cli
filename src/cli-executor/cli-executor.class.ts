import * as nodePlop from 'node-plop';
import { DEFAULT_USAGE_SPEC, GeneratorResults, DEFAULT_CONFIG, PLOP_GENERATOR_NAME } from './cli-executor.config';
import { ArgvTable } from '../command-line-parser/command-line.interface';
import { green, red } from 'colors/safe';
import { resolve } from 'path';
import { CommandLine } from '../command-line-parser/command-line.class';

export class NgxsCliExecutor {

    /**
     * @description - entry point for execute cli
     * @param argv {ArgvTable}
     */
    public static run(argv: ArgvTable) {
        const { name, plopfile } = argv;

        const usageCustomPlopFile: boolean = !!plopfile;
        const usageCliWithoutPrompt: boolean = !!name;

        if (usageCustomPlopFile) {
            this.execPlop([plopfile]);
        } else if (usageCliWithoutPrompt) {
            this.execNodePlop(argv)
                .then((result) => this.showOutput(result));
        } else {
            this.execPlop([__dirname, DEFAULT_CONFIG]);
        }
    }

    /**
     * @description run cli with prompt
     * @param pathToPlopfile {string[]} - path relative to the command being run
     * @example: ['./my-plop/plopfile.js']
     */
    public static execPlop(pathToPlopfile: string[]) {
        CommandLine.setArgument('--plopfile', resolve(...pathToPlopfile));
        require('plop');
    }

    /**
     * @description silent runnable cli (without prompt)
     * @param argv {ArgvTable}
     */
    public static execNodePlop(argv: ArgvTable): Promise<GeneratorResults> {
        const { spec } = argv;
        const plopPath = resolve(...[__dirname, DEFAULT_CONFIG]);
        const plop = nodePlop(plopPath);
        const generator = plop.getGenerator(PLOP_GENERATOR_NAME);
        const shouldBeGenerateSpec: boolean = (spec ? JSON.parse(spec) : DEFAULT_USAGE_SPEC);

        const cliArgv = { directory: '.', ...argv, spec: shouldBeGenerateSpec };
        return generator.runActions(cliArgv);
    }

    /**
     * @description - custom output information
     * @param changes {Changes}
     * @param failures {Failures}
     */
    private static showOutput({ changes, failures }: GeneratorResults) {
        changes.forEach((item) => console.log(green('[SUCCESS]'), item.type, item.path));
        failures.forEach((item) => console.log(red('[FAILED]'), item.type, item.error));
    }

}
