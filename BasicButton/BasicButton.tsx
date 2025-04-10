import React from 'react';
import classNames from 'classnames';
import styles from './BasicButton.module.scss';

type BasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    isVisible?: boolean;
    width?: number | string;
    height?: number;
    variant?: 'solid' | 'gradient';
};

const BasicButton = ({
    children,
    isVisible = true,
    width,
    height,
    variant = 'solid',
    style,
    ...props
}: BasicButtonProps) => {
    // CSS 변수 형태로 동적 값을 전달합니다.
    type CSSPropertiesWithVars = React.CSSProperties & {
        [key: `--${string}`]: string | number;
    };
    const cssVars: CSSPropertiesWithVars = {
        '--button-width': width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
        '--button-height': height ? `${height}px` : '40px',
        '--button-opacity': isVisible ? 1 : 0,
    };

    const combinedStyle = classNames(styles.BasicButton, {
        [styles.Gradient]: variant === 'gradient',
    });

    return (
        <button
            {...props}
            className={combinedStyle}
            // 다른 inline style와 합쳐서 전달할 수도 있습니다.
            style={{ ...cssVars, ...style }}
        >
            {children}
        </button>
    );
};

export default BasicButton;
