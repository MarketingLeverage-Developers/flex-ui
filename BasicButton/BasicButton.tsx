import React from 'react';
import styles from './BasicButton.module.scss';

type BasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    isVisible?: boolean;
    width?: number | string;
    height?: number;
    variant?: 'solid' | 'gradient';
};

const BasicButton = ({ children, isVisible = true, width, height, variant = 'solid', ...props }: BasicButtonProps) => {
    const inlineStyle: React.CSSProperties = {
        width: `${width ?? '100%'}`,
        height: `${height ?? 40}px`,
        opacity: isVisible ? 1 : 0,
        background: variant === 'gradient' ? 'linear-gradient(45deg, #f98131, #f6d365)' : '#f98131',
    };

    return (
        <button {...props} className={styles['basic-button']} style={inlineStyle}>
            {children}
        </button>
    );
};

export default BasicButton;
