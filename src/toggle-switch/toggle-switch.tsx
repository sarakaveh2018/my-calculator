import css from './toggle-switch.module.scss';
import { useEffect, useState } from "react";
import { ToggleSwitchProps } from "./toggle-switch.types";

export const ToggleSwitch = ({ isChecked }: ToggleSwitchProps) => {

    const [checked, setChecked] = useState(isChecked || false);

    const toggleValue = (e: React.FormEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
    }


    useEffect(() => {
        if (checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });

    return (
        <div className={css.switch}>
            <input type="checkbox"
                id='switch'
                onChange={toggleValue} checked={checked} />
            <label htmlFor="switch"></label>
            <span>{`SWITCH TO ${checked ? 'LIGHT' : 'DARK'} THEME`}</span>
        </div>
    );
};