import React from 'react';
import BasicPaginationPageSize from './PageSizeSelect/PageSizeSelect';
import Pagination, { PaginationValueType } from 'headless/Pagination/Pagination';
import BasicPaginationPagingButtons from './BasicPaginationPagingButtons/BasicPaginationPagingButtons';
import styles from './BasicPagination.module.scss';

type BasicPaginationProps = {
    children: React.ReactNode;
    defaultValue?: PaginationValueType;
};

const BasicPagination = ({ children, defaultValue }: BasicPaginationProps) => {
    return (
        <Pagination defaultValue={defaultValue}>
            <div className={styles['basic-pagination']}>{children}</div>
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
