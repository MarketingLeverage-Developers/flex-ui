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
        border-collapse: separate; /* 변경 */
        border-spacing: 0; /* 셀 간 간격 0 */
        table-layout: fixed; /* 셀 크기 균일화 */
        border: 0.5px solid #ddd;
        border-radius: 8px; /* 원하는 둥근 모서리 */
        overflow: hidden; /* 내부 내용이 둥근 모서리를 벗어나지 않게 */
    `;

    return <table css={tableStyle}>{children}</table>;
};
export default Table;

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
