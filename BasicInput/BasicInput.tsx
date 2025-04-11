import React from 'react';
import styles from './BasicInput.module.scss';
import classNames from 'classnames';

type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    fontSize?: string | number;
    fontWeight?: string | number;
    variant?: 'border' | 'none';
};

const BasicInput = ({ left, right, fontSize, fontWeight, variant = 'border', ...props }: BasicInputProps) => {
    type CSSPropertiesWithVars = React.CSSProperties & {
        [key: `--${string}`]: string | number;
    };
    const cssVars: CSSPropertiesWithVars = {
        '--input-font-size': fontSize ? `${fontSize}px` : '16px',
        '--input-font-weight': fontWeight ?? 'regular',
    };

    const combinedStyle = classNames(styles.BasicInput, {
        [styles.Border]: variant === 'border',
    });

    return (
        <div className={combinedStyle} style={{ ...cssVars, ...props.style }}>
            {left}
            <input {...props} />
            {right}
        </div>
    );
};

export default BasicInput;
