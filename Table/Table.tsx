/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableBody from './TableBody';

type TableProps = {
    children: React.ReactNode;
    // custom style prop for the table element
};

const Table = ({ children }: TableProps) => {
    const tableStyle = css`
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed; /* 셀 크기 균일화 */
        border: 1px solid #ddd;
    `;

    return <table css={tableStyle}>{children}</table>;
};
export default Table;

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
