import React from 'react';
import styles from './Label.module.scss';

type LabelProps = {
    text: string;
    required?: boolean;
    children: React.ReactNode;
};

const Label = ({ text, required, children }: LabelProps) => {
    return (
        <div className={styles.Label}>
            <div className={styles.Text}>
                <span className={styles.LabelText}>{text}</span>
                {required && <span className={styles.Required}>*</span>}
            </div>
            <div className={styles.Input}>{children}</div>
        </div>
    );
};

export default Label;
