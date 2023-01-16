import css from './calculator.module.scss';
import { Result } from './result/result';

const btnValues = [
    ["C", "(", ")", "X"],
    ["R", "%", "PM", "/"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3],
    [0, ".", "="],
  ];

export const Calculator = () => {
    return (
        <div className={css.container}>
            <Result />

            {/* <div className={css.screen}>
                input
            </div> */}
            <div className={css.buttonBox}>
                {/* <div className={`${css.button} ${css.clear} ${css.orange}`}>C</div>
                <div className={`${css.button} ${css.openParenthesis} ${css.lightOrange}`}>(</div>
                <div className={`${css.button} ${css.closeParenthesis} ${css.lightOrange}`}>)</div>
                <div className={`${css.button} ${css.multiple} ${css.lightPurple}`}>&#215;</div>
                <div className={`${css.button} ${css.radical} ${css.lightOrange}`}>&#8730;</div>
                <div className={`${css.button} ${css.percent} ${css.lightOrange}`}>%</div>
                <div className={`${css.button} ${css.plusMinus} ${css.lightOrange}`}>&#xb1;</div>
                <div className={`${css.button} ${css.divide} ${css.lightPurple}`}>&#247;</div>
                <div className={`${css.button} ${css.seven} ${css.white}`}>7</div>
                <div className={`${css.button} ${css.eight} ${css.white}`}>8</div>
                <div className={`${css.button} ${css.nine} ${css.white}`}>9</div>
                <div className={`${css.button} ${css.minus} ${css.lightPurple}`}>-</div>
                <div className={`${css.button} ${css.four} ${css.white}`}>4</div>
                <div className={`${css.button} ${css.five} ${css.white}`}>5</div>
                <div className={`${css.button} ${css.six} ${css.white}`}>6</div>
                <div className={`${css.button} ${css.plus} ${css.lightPurple}`}>+</div>
                <div className={`${css.button} ${css.one} ${css.white}`}>1</div>
                <div className={`${css.button} ${css.two} ${css.white}`}>2</div>
                <div className={`${css.button} ${css.three} ${css.white}`}>3</div>
                <div className={`${css.button} ${css.equal} ${css.purple}`}>=</div>
                <div className={`${css.button} ${css.dot} ${css.white}`}>.</div>
                <div className={`${css.button} ${css.zero} ${css.white}`}>0</div>
                <div className={`${css.button} ${css.back} ${css.lightGray}`}>^</div> */}
            </div>
        </div>
    );
};