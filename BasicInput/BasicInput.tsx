import React from 'react';
import styles from './BasicInput.module.scss';
import classNames from 'classnames';

type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
};

const BasicInput = ({ left, right, ...props }: BasicInputProps) => {
    const combinedStyle = classNames(styles['basic-input'], props.className);

    return (
        <div className={combinedStyle}>
            {left}
            <input {...props} className={styles['basic-input__input']} />
            {right}
        </div>
    );
};

export default BasicInput;
