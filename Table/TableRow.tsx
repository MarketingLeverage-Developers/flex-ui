/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type TableRowProps = {
    children: React.ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
    const tableRowStyle = css`
        &:nth-of-type(even) {
            background: #f9f9f9;
        }
    `;

    return <tr css={tableRowStyle}>{children}</tr>;
};

export default TableRow;
