import { css } from '@emotion/react';
import Dropdown from 'headless/Dropdown/Dropdown';
import React from 'react';

type BasicSelectContentProps = {
    children: React.ReactNode;
};

const BasicSelectContent = ({ children }: BasicSelectContentProps) => {
    const basicPaginationPageSizeTriggerStyle = css`
        height: auto;
        width: 240px;
        padding: 6px 0;
        border-radius: 6px;
        border: 1px solid #dbdbdb;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 28px;
        list-style: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    `;

    return <Dropdown.Content defaultStyle={basicPaginationPageSizeTriggerStyle}>{children}</Dropdown.Content>;
};

export default BasicSelectContent;
