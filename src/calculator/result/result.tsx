import css from './result.module.scss';
import { ResultProps } from './result.types';

export const Result = ({ result, operations }: ResultProps): JSX.Element => {

    return (
        <div className={css.container}>
            <div className={css.opreations}>{operations}</div>
            <div className={css.result}>{result}</div>
        </div>
    );
};