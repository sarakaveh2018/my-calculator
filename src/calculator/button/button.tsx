import css from './button.module.scss';
import { ButtonProps } from './button.types';

export const Button = ({ value }: ButtonProps): JSX.Element => {
    return (
        <div className={`${css.button} 
        ${value === "="
                ? `${css.equals} ${css.purple}` : value === "C"
                    ? css.orange : value === "R" || value === "(" || value === ")" || value === 'PM' || value === '%'
                        ? css.lightOrange : value === "X" || value === "/" || value === '-' || value === '+'
                            ? css.lightPurple : value === 'b'
                                ? css.lightGray : css.white}`}>{value}</div>
    )

}