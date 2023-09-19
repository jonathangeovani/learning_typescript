// Basic types
var num: number = 3;
var text: string = 'Hello World!';
var bool: boolean = true;
var all: any;    // Can store any type of value, like pure Javascript code (Vanila Javascript)

// Other types
var doubt: unknown;     // Is different from any. We need to convert it lately to use it properly
var nullValue: null;
var undefinedValue: undefined;

// type Array
var nums: number[] = [1,2,3];
var company: [number, string] = [123, 'milhas'];    // Must have the exactly same amount of values

// type Object
var obj: object = {};

// Functions
function returnsNothing(): void {   // void - Used to specify that this function don't return any value
    console.log(text);
}