import css from './calculator.module.scss';
import { useState } from 'react';
import { ToggleSwitch } from '../toggle-switch/toggle-switch';
import { Button } from './button/button';
import { calculateResult, CALCULATOR_BTNS, removeLastItem } from './calculator.helper';
import { Result } from './result/result';


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
            <ToggleSwitch title='SWITCH TO DARK THEME' />
            <div className={css.buttonBox}>
                {CALCULATOR_BTNS.flat().map((btn) => <Button key={btn} value={btn} onClick={onBtnClick} />)}
            </div>
        </div>
    );
};