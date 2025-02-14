/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type TableBodyProps = {
    children: React.ReactNode;
};

const TableBody = ({ children }: TableBodyProps) => {
    const tableBodyStyle = css`
        tr:hover {
            background: #e6f7ff;
        }
    `;

    return <tbody css={tableBodyStyle}>{children}</tbody>;
};

export default TableBody;
