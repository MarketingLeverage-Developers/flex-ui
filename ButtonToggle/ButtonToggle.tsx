import React from 'react';
import styles from './ButtonToggle.module.scss';
import classNames from 'classnames';
import Toggle from 'headless/Toggle/Toggle';

type ButtonToggleProps = {
    isActive: boolean;
};

const ButtonToggle = ({ isActive }: ButtonToggleProps) => {
    const combinedClassName = classNames(styles.ButtonToggle, {
        [styles.Active]: isActive,
    });

    return (
        <Toggle defaultValue={isActive}>
            <Toggle.Button className={combinedClassName} />
        </Toggle>
    );
};

export default ButtonToggle;
