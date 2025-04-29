// BasicInput.tsx
import React, { forwardRef } from 'react';
import styles from './BasicInput.module.scss';
import classNames from 'classnames';

type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    fontSize?: string | number;
    fontWeight?: string | number;
    variant?: 'border' | 'none';
};

// forwardRef로 감싸면서 ref를 HTMLInputElement에 포워딩
const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
    ({ left, right, fontSize, fontWeight, variant = 'border', ...props }, ref) => {
        type CSSPropertiesWithVars = React.CSSProperties & {
            [key: `--${string}`]: string | number;
        };
        const cssVars: CSSPropertiesWithVars = {
            '--input-font-size': fontSize ? `${fontSize}px` : '16px',
            '--input-font-weight': fontWeight ?? 'regular',
        };

        const combinedClass = classNames(styles.BasicInput, {
            [styles.Border]: variant === 'border',
        });

        return (
            <div className={combinedClass} style={{ ...cssVars, ...props.style }}>
                {left}
                {/* 여기서 ref를 전달 */}
                <input ref={ref} {...props} />
                {right}
            </div>
        );
    }
);

// 디버그를 위해 컴포넌트 이름 지정
BasicInput.displayName = 'BasicInput';

export default BasicInput;
