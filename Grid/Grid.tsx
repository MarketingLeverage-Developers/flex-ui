import React from 'react';
import classNames from 'classnames';
import styles from './Grid.module.scss';

type Spacing = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    padding?: Spacing | number;
    margin?: Spacing | number;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gap?: number;
    columnGap?: number;
    rowGap?: number;
    width?: number | string;
    height?: number | string;
};

const Grid = ({
    children,
    padding,
    margin,
    gridTemplateColumns,
    gridTemplateRows,
    gap = 0,
    columnGap,
    rowGap,
    width,
    height,
    style,
    ...props
}: GridProps) => {
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

    // width와 height가 숫자면 px 단위를 붙이고, 문자열이면 그대로 사용
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === 'number') {
            return `${dim}px`;
        }
        return dim || 'auto';
    };

    // CSS 변수로 동적 값 전달
    const cssVariables: React.CSSProperties = {
        '--grid-padding': spacingToString(padding),
        '--grid-margin': spacingToString(margin),
        '--grid-template-columns': gridTemplateColumns || 'none',
        '--grid-template-rows': gridTemplateRows || 'none',
        '--grid-gap': `${gap}px`,
        '--grid-column-gap': columnGap !== undefined ? `${columnGap}px` : undefined,
        '--grid-row-gap': rowGap !== undefined ? `${rowGap}px` : undefined,
        '--grid-width': dimensionToString(width),
        '--grid-height': dimensionToString(height),
    } as React.CSSProperties;

    return (
        <div {...props} className={classNames(styles.Grid, props.className)} style={{ ...cssVariables, ...style }}>
            {children}
        </div>
    );
};

export default Grid;
