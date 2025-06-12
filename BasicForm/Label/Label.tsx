import React from 'react';
import styles from './Label.module.scss';
import classNames from 'classnames';

type LabelProps = {
    text: string;
    required?: boolean;
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
};

const Label = ({ text, required, align = 'left', children }: LabelProps) => {
    const cssVariables: React.CSSProperties = {
        '--align': align,
    } as React.CSSProperties;

    return (
        <div className={styles.Label} style={{ ...cssVariables }}>
            <div className={styles.Text}>
                <span className={styles.LabelText}>{text}</span>
                {required && <span className={styles.Required}>*</span>}
            </div>
            <div className={styles.Input}>{children}</div>
        </div>
    );
};

export default Label;
