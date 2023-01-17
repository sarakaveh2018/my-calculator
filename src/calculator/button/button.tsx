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
                    ? `${css.equals} ${css.purple}` : value === "C"
                        ? css.orange : value === "R" || value === "(" || value === ")" || value === '+-' || value === '%'
                            ? css.lightOrange : value === "*" || value === "/" || value === '-' || value === '+'
                                ? css.lightPurple : value === 'b'
                                    ? css.lightGray : css.white}`}>{convertSymbol(value)}</div>
    );
}