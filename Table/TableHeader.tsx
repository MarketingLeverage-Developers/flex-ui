/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type TableHeaderProps = {
    children: React.ReactNode;
};

const TableHeader = ({ children }: TableHeaderProps) => {
    const tableHeaderStyle = css`
        background: rgba(249, 129, 49, 0.06);
        font-weight: bold;
    `;

    return (
        <thead>
            <tr css={tableHeaderStyle}>{children}</tr>
        </thead>
    );
};

export default TableHeader;
