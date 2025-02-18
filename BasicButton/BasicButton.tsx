/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type BasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode; // button text
    isVisible?: boolean;
};

const BasicButton = ({ children, isVisible, ...props }: BasicButtonProps) => {
    const basicButtonStyle = css`
        padding: 5px 16px;
        box-sizing: border-box;
        height: 40px;
        width: auto;
        border-radius: 8px;
        background-color: #f98131;
        border: none;
        color: #fff;
        font-family: Pretendard;
        font-weight: 700;
        white-space: nowrap;
        opacity: ${isVisible ?? true ? 1 : 0};
        transition: all 0.3s ease;
    `;

    return (
        <button {...props} css={basicButtonStyle}>
            {children}
        </button>
    );
};

export default BasicButton;
