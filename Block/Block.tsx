import React from 'react';
import classNames from 'classnames';
import styles from './Block.module.scss';

export type Spacing = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

export type BlockProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    padding?: Spacing | number;
    margin?: Spacing | number;
};

// CSS custom properties를 허용하도록 확장한 타입 정의 (TS 4.1 이상 필요)
interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Block = ({ children, padding, margin, style, className, ...props }: BlockProps) => {
    // 숫자 또는 객체 형태의 spacing을 문자열로 변환하는 함수
    const spacingToString = (spacing?: Spacing | number): string => {
        if (typeof spacing === 'number') {
            return `${spacing}px`;
        }
        if (spacing) {
            return `${spacing.top ?? 0}px ${spacing.right ?? 0}px ${spacing.bottom ?? 0}px ${spacing.left ?? 0}px`;
        }
        return '0';
    };

    // CSS 변수로 동적 값 전달 (확장된 타입 사용)
    const cssVariables: CSSPropertiesWithVars = {
        '--block-padding': spacingToString(padding),
        '--block-margin': spacingToString(margin),
    };

    return (
        <div {...props} className={classNames(styles.block, className)} style={{ ...cssVariables, ...style }}>
            {children}
        </div>
    );
};

export default Block;
