/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type Spacing = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

export type FlexBoxProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    padding?: Spacing | number;
    margin?: Spacing | number;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    gap?: number;
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    width?: number | string;
    height?: number | string;
};

const FlexBox = ({
    children,
    padding,
    margin,
    flexDirection = 'row',
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    gap = 0,
    flexWrap = 'nowrap',
    width,
    height,
    ...props
}: FlexBoxProps) => {
    // padding과 margin을 숫자 또는 객체로 처리하는 함수
    const spacingToString = (spacing?: Spacing | number) => {
        if (typeof spacing === 'number') {
            return `${spacing}px`;
        }
        if (spacing) {
            return `${spacing.top ?? 0}px ${spacing.right ?? 0}px ${spacing.bottom ?? 0}px ${spacing.left ?? 0}px`;
        }
        return '0';
    };

    // width와 height를 숫자일 경우 px 단위를 붙이고, 문자열이면 그대로 사용
    const dimensionToString = (dim?: number | string) => {
        if (typeof dim === 'number') {
            return `${dim}px`;
        }
        return dim || 'auto';
    };

    const flexBoxStyle = css`
        display: flex;
        flex-direction: ${flexDirection};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        flex-wrap: ${flexWrap};
        gap: ${gap}px;
        padding: ${spacingToString(padding)};
        margin: ${spacingToString(margin)};
        width: ${dimensionToString(width)};
        height: ${dimensionToString(height)};
    `;

    return (
        <div {...props} css={flexBoxStyle}>
            {children}
        </div>
    );
};

export default FlexBox;
