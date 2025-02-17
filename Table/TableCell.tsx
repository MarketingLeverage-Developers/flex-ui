/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type TableCellProps = {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
};

const TableCell = ({ children, align = 'center' }: TableCellProps) => {
    const cellStyle = css`
        border: 1px solid #ddd;
        padding: 8px;
        display: table-cell;
        vertical-align: top; /* 수직 정렬: 위쪽 */
        text-align: left;
        word-wrap: break-word; /* 긴 단어 줄바꿈 */
        word-break: break-word; /* 단어가 길 때 강제로 줄바꿈 */
        white-space: normal; /* 텍스트가 셀 너비를 초과하면 줄바꿈 */
        overflow-wrap: break-word; /* CSS3 기준 */
    `;

    return <div css={[cellStyle, { textAlign: align }]}>{children}</div>;
};

export default TableCell;
