/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type BasicInputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;
};

const BasicInput = ({ left, children, right, ...props }: BasicInputProps) => {
    const basicInputWrapperStyle = css`
        padding: 10px 18px;
        width: 100%;
        max-width: 380px;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid #dbdbdb;
        display: flex;
        align-items: center;
        color: #96999c;
    `;

    const basicInputStyle = css`
        width: 100%;
        padding: 10px 18px;
        border: none;
        font-size: 14px;
        font-family: Pretendard;
        outline: none;
    `;

    return (
        <div css={basicInputWrapperStyle}>
            {left}
            <input {...props} css={basicInputStyle} placeholder="이메일 주소" />
            {right}
        </div>
    );
};

export default BasicInput;
