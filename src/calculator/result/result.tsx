import css from './result.module.scss';
import { ResultProps } from './result.types';

export const Result = ({ result, operations }: ResultProps): JSX.Element => {

    return (
        <div className={css.screen}>
            <div>{operations}</div>
            <br />
            <hr />
            <div>{result}</div>
        </div>
    );
};