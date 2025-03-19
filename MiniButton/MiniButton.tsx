import React, { HTMLAttributes } from 'react';
import styles from './MiniButton.module.scss';
import classNames from 'classnames';

type MiniButtonProps = HTMLAttributes<HTMLButtonElement> & {
    type: 'brand' | 'base';
};

const MiniButton = ({ type, ...props }: MiniButtonProps) => {
    const combinedClassName = classNames(styles.MiniButton, {
        [styles.Brand]: type === 'brand',
    });

    return <button {...props} className={combinedClassName} />;
};

export default MiniButton;
