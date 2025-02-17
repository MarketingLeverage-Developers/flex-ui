/** @jsxImportSource @emotion/react */
import React from 'react';
import BasicPaginationPageSize from './BasicPaginationPageSize.tsx/BasicPaginationPageSize';
import Pagination, { PaginationValueType } from 'headless/Pagination/Pagination';
import BasicPaginationPagingButtons from './BasicPaginationPagingButtons';
import { css } from '@emotion/react';

type BasicPaginationProps = {
    children: React.ReactNode;
    defaultValue?: PaginationValueType;
};
const BasicPagination = ({ children, defaultValue }: BasicPaginationProps) => {
    const basicPaginationStyle = css`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

    return (
        <Pagination defaultValue={defaultValue}>
            <div css={basicPaginationStyle}>{children}</div>
        </Pagination>
    );
};

export default BasicPagination;

BasicPagination.PageSize = BasicPaginationPageSize;
BasicPagination.PagingButtons = BasicPaginationPagingButtons;
BasicPagination.FastPrev = Pagination.FastPrev;
BasicPagination.Prev = Pagination.Prev;
BasicPagination.Pages = Pagination.Pages;
BasicPagination.Next = Pagination.Next;
BasicPagination.FastNext = Pagination.FastNext;
