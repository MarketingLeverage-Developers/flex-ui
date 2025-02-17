import { css } from '@emotion/react';
import Dropdown from 'headless/Dropdown/Dropdown';
import React from 'react';

type BasicPaginationContentProps = {
    children: React.ReactNode;
};

const BasicPaginationPageSizeContent = ({ children }: BasicPaginationContentProps) => {
    const basicPaginationPageSizeTriggerStyle = css`
        height: auto;
        width: 100%;
        border-radius: 6px;
        border: 1px solid #dbdbdb;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 30px;
        list-style: none;
    `;

    return <Dropdown.Content defaultStyle={basicPaginationPageSizeTriggerStyle}>{children}</Dropdown.Content>;
};

export default BasicPaginationPageSizeContent;
