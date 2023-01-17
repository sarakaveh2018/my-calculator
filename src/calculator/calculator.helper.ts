export const CALCULATOR_BTNS = [
    ["C", "(", ")", "*"],
    ["R", "%", "+-", "/"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3],
    [".", 0, 'b', "="],
];

export const removeLastItem = (values: Array<string | number>): Array<string | number> => {
    const clone = [...values];
    clone.pop();
    return clone;
}

export const calculateResult = (values: Array<string | number>): string => {
    const clone = [...values];
    if (typeof clone.at(-1) === 'string') {
        clone.pop();
    }
    return JSON.stringify(eval(clone.join('')));
}