import { useState } from 'react';
import { Button } from './button/button';
import css from './calculator.module.scss';
import { Result } from './result/result';

const btnValues = [
    ["C", "(", ")", "*"],
    ["R", "%", "+-", "/"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3],
    [".", 0, 'b', "="],
];

export const Calculator = () => {

    const [operations, setOperations] = useState<Array<string | number>>([]);
    const [result, setResult] = useState('0');

    const AddToOperationList = (btn: string | number) => {
        const clone = [...operations];
        const lastItemIsNumber = typeof clone.at(-1) === 'number';
        const lastItemIsSign = typeof clone.at(-1) === 'string';

        if (typeof btn === 'number' && lastItemIsNumber) {
            const merge = +`${clone.at(-1)}${btn}`;
            clone.pop();
            clone.push(merge);
        } else if (typeof btn === 'string' && lastItemIsSign) {
            clone.pop();
            clone.push(btn);
        }
        else {
            clone.push(btn);
        }
        setOperations(clone);
    }

    const calculateResult = (values: Array<string | number>): string => {
        const clone = [...values];
        if (typeof clone.at(-1) === 'string') {
            clone.pop();
        }
        return JSON.stringify(eval(clone.join('')));
    }

    const removeLastItem = (values: Array<string | number>): Array<string | number> => {
        const clone = [...values];
        clone.pop();
        return clone;
    }

    const onBtnClick = (btn: string | number) => {
        const firstBtnIsSign = operations.length === 0 && typeof btn === 'string';

        if (firstBtnIsSign) {
            return;
        }

        switch (btn) {
            case '=':
                const calculatedResult = calculateResult(operations);
                setResult(calculatedResult);
                break;
            case 'C':
                setOperations([]);
                setResult('0');
                break;
            case 'b':
                const newList = removeLastItem(operations);
                setOperations(newList);
                break;
            default:
                AddToOperationList(btn);
                break;
        }
    }

    return (
        <div className={css.container}>
            <Result operations={operations.join('')} result={result} />
            <div className={css.buttonBox}>
                {
                    btnValues.flat().map((btn) => {
                        return (
                            <Button key={btn} value={btn} onClick={onBtnClick} />
                        )
                    })
                }
            </div>
        </div>
    );
};