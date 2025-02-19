import React from 'react';
import styles from './BasicInput.module.scss';

type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
};

const BasicInput = ({ left, right, ...props }: BasicInputProps) => {
    return (
        <div className={styles['basic-input']}>
            {left}
            <input {...props} className={styles['basic-input__input']} />
            {right}
        </div>
    );
};

export default BasicInput;
