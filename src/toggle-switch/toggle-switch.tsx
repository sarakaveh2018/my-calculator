import { useState } from "react";
import { ToggleSwitchProps } from "./toggle-switch.types";
import css from './toggle-switch.module.scss';

export const ToggleSwitch = ({ isChecked, title }: ToggleSwitchProps) => {

    const [checked, setChecked] = useState(isChecked || false);

    const toggleValue = (e: React.FormEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
    }

    return (
        <div className={css.switch}>
            <input type="checkbox"
                id='switch'
                onChange={toggleValue} checked={checked} />
            <label htmlFor="switch"></label>
            <span>{title}</span>
        </div>
    );
};