import css from './button.module.scss';
import { ButtonProps } from './button.types';

export const Button = ({ value, onClick }: ButtonProps): JSX.Element => {

    const convertSymbol = (value: string | number) => {
        switch (value) {
            case '*':
                return <>&#215;</>;
            case 'R':
                return <>&#8730;</>
            case '/':
                return <>&#247;</>
            case '+-':
                return <>&#xb1;</>
            default:
                return value;
        }
    }

    const setClassName = (value: string | number) => {
        switch (value) {
            case '=':
                return css.equals;
            case 'C':
                return css.clear;
            case 'R':
            case '(':
            case ')':
            case '+-':
            case '%':
                return css.proSymbol;
            case '*':
            case '/':
            case '-':
            case '+':
                return css.mainSymbol;
            case 'b':
                return css.backspace
            default:
                return css.numbers;
        }
    }
    return (
        <div onClick={() => onClick(value)} className={`${css.button} ${setClassName(value)}`}>{convertSymbol(value)}</div>
    );
}