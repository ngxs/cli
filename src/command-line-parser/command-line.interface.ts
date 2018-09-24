export interface ArgumentOptions {
    name: string;
    type: object | any;
    alias: string;
}

export type CommandLineDefinitions = Array<Partial<ArgumentOptions>>;

export interface Argv {
    help: boolean;
    name: string;
    spec: string;
    directory: string;
    folderName: string;
    plopfile: string;
}

export type ArgvTable = Partial<Argv>;
