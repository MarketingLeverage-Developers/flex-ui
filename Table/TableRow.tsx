/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type TableRowProps = {
    children: React.ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
    const tableRowStyle = css`
        &:nth-of-type(even) {
            background: #f3f3f3;
        }
    `;

    return <tr css={tableRowStyle}>{children}</tr>;
};

export default TableRow;
