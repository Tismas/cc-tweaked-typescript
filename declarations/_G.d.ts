declare interface Table<K extends {} = {}, V = any> {
  concat(sep?: string, i?: number, j?: number): void;
  length: number;
}

// Pauses execution for the specified number of seconds.
declare function sleep(seconds: number): void;

// Writes a line of text to the screen without a newline at the end, wrapping text if necessary.
declare function write(text: string): number;
// Prints the specified values to the screen separated by spaces, wrapping if necessary.
declare function print(...args: string[]): number;

// Prints the specified values to the screen in red, separated by spaces, wrapping if necessary.
declare function printError(...args: string[]): void;

// Reads user input from the terminal, automatically handling arrow keys, pasting, character replacement, history scrollbac...
declare function read(
  replaceChar?: string,
  history?: Table<string, string>,
  completeFn?: any,
  defaultValue?: string
): string;

// The ComputerCraft and Minecraft version of the current computer environment.
declare const _HOST: string;

declare const _CC_DEFAULT_SETTINGS: string;
