import Toggle, { useToggle } from 'headless/Toggle/Toggle';
import React, { useEffect } from 'react';
import styles from './BasicToggle.module.scss';
import classNames from 'classnames';

type CheckToggleProps = {
    onToggleClick: (value: boolean) => void;
    defaultValue: boolean;
};

const CheckToggle = ({ onToggleClick, defaultValue }: CheckToggleProps) => {
    const { toggleValue, changeToggle } = useToggle();

    const handleCheckBoxClick = (value: boolean) => {
        onToggleClick(value);
        changeToggle();
    };

    const combinedClassName = classNames(styles.BasicToggle, {
        [styles.Active]: defaultValue,
    });

    return (
        <Toggle defaultValue={defaultValue}>
            <Toggle.Button
                className={combinedClassName}
                onClick={() => handleCheckBoxClick(toggleValue)}
            ></Toggle.Button>
        </Toggle>
    );
};

export default CheckToggle;
