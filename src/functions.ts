/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return ((temperature - 32) * 5) / 9;
}

/**test("Converts Celsius to Farenheit:", () => {
    expect(fahrenheitToCelius(0)).toBe(-17.77777777777778);
    expect(fahrenheitToCelius(32)).toBe(0);
});
*/
console.log(fahrenheitToCelius(0));
console.log(fahrenheitToCelius(32));

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum: number = 0;
    if (first > 0) {
        sum = first;
    }
    if (second > 0) {
        sum += second;
    }
    if (third > 0) {
        sum += third;
    }
    return sum;
}

/**test("Adds the sum:", () => {
    expect(add3(1, 2, 3)).toBe(6);
    expect(add3(0, 1, 2)).toBe(3);
    expect(add3(0, 0, 0)).toBe(0);
    expect(add3(1, 0, 2)).toBe(2);
    expect(add3(1, 2, 0)).toBe(2);
});
*/
console.log(add3(1, 2, 3));
console.log(add3(0, 2, 3));
console.log(add3(1, 0, 3));
console.log(add3(1, 2, 0));
console.log(add3(0, 0, 0));

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}
console.log(shout("Hello"));

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return "?" === message[message.length - 1];
}
console.log(isQuestion("Hello?"));
console.log(isQuestion("Hello"));

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let isYes: boolean = true;
    if (word.toUpperCase() === "YES") {
        isYes = true;
        return isYes;
    }
    if (word.toUpperCase() === "NO") {
        isYes = false;
        return isYes;
    }
    return null;
}

console.log(convertYesNo("yes"));
console.log(convertYesNo("no"));
console.log(convertYesNo("cat"));
