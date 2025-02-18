/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type BasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    isVisible?: boolean;
    height?: number;
    variant?: 'solid' | 'gradient';
};

const BasicButton = ({ children, isVisible = true, height, variant = 'solid', ...props }: BasicButtonProps) => {
    const basicButtonStyle = css`
        padding: 5px 16px;
        box-sizing: border-box;
        height: ${height ?? 40}px;
        width: auto;
        border-radius: 8px;
        background: ${variant === 'gradient' ? 'linear-gradient(45deg, #f98131, #f6d365)' : '#f98131'};
        border: none;
        color: #fff;
        font-family: Pretendard, sans-serif;
        font-weight: 700;
        white-space: nowrap;
        opacity: ${isVisible ? 1 : 0};
        transition: all 0.3s ease;
        cursor: pointer;
    `;

    return (
        <button {...props} css={basicButtonStyle}>
            {children}
        </button>
    );
};

export default BasicButton;
