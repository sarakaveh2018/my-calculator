import css from './button.module.scss';
import { ButtonProps } from './button.types';

export const Button = ({ value, onClick }: ButtonProps): JSX.Element => {

    const convertSymbol = (value: string | number) => {
        if (value === '*') {
            return <>&#215;</>
        }
        if (value === 'R') {
            return <>&#8730;</>
        }
        if (value === '/') {
            return <>&#247;</>
        }
        if (value === '+-') {
            return <>&#xb1;</>
        } else {
            return value
        }
    }

    return (
        <div onClick={() =>
            onClick(value)} className={`${css.button} 
        ${value === "="
                    ? `${css.equals}` : value === "C"
                        ? css.clear : value === "R" || value === "(" || value === ")" || value === '+-' || value === '%'
                            ? css.proSymbol : value === "*" || value === "/" || value === '-' || value === '+'
                                ? css.mainSymbol : value === 'b'
                                    ? css.backspace : css.numbers}`}>{convertSymbol(value)}</div>
    );
}