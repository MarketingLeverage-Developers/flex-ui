import React from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    fontSize?: number | string;
    fontWeight?: number | string;
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    oneLine?: boolean;
    children: React.ReactNode;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Text = ({ fontSize, fontWeight, color, textAlign, oneLine, children, style, className, ...props }: TextProps) => {
    // fontSize가 number면 'px' 단위를 붙이고, 문자열이면 그대로 사용
    const computedFontSize = typeof fontSize === 'number' ? `${fontSize}px` : fontSize ?? '16px';
    // fontWeight도 마찬가지, 필요에 따라 숫자 또는 문자열 허용
    const computedFontWeight = typeof fontWeight === 'number' ? fontWeight : fontWeight ?? 400;
    const computedColor = color ?? '#324449';
    const computedTextAlign = textAlign ?? 'left';

    const cssVariables: CSSPropertiesWithVars = {
        '--text-font-size': computedFontSize,
        '--text-font-weight': computedFontWeight,
        '--text-color': computedColor,
        '--text-text-align': computedTextAlign,
    };

    const oneLineStyles: React.CSSProperties = oneLine
        ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
        : {};

    return (
        <span
            {...props}
            className={classNames(styles.text, className)}
            style={{ ...cssVariables, ...style, ...oneLineStyles }}
        >
            {children}
        </span>
    );
};

export default Text;
