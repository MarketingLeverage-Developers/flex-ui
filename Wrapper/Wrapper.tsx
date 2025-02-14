/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type WrapperProps = {
    children: React.ReactNode; // children prop을 optional로 설정
    padding?:
        | {
              top: number;
              right: number;
              bottom: number;
              left: number;
          }
        | number;
    margin?:
        | {
              top: number;
              right: number;
              bottom: number;
              left: number;
          }
        | number;
};

const Wrapper = ({ children, padding, margin }: WrapperProps) => {
    const wrapperStyle = css`
        padding: ${typeof padding === 'number'
            ? `${padding}px`
            : ` ${padding?.top ?? 0}px ${padding?.right ?? 0}px ${padding?.bottom ?? 0}px ${padding?.left ?? 0}px`};
        margin: ${typeof margin === 'number'
            ? `${margin}px`
            : ` ${margin?.top ?? 0}px ${margin?.right ?? 0}px ${margin?.bottom ?? 0}px ${margin?.left ?? 0}px`};
    `;

    return <div css={wrapperStyle}>{children}</div>;
};

export default Wrapper;
