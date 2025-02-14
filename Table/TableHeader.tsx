/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type TableHeaderProps = {
    children: React.ReactNode;
};

const TableHeader = ({ children }: TableHeaderProps) => {
    const tableHeaderStyle = css`
        background: #f4f4f4;
        font-weight: bold;
    `;

    return (
        <thead>
            <tr css={tableHeaderStyle}>{children}</tr>
        </thead>
    );
};

export default TableHeader;
