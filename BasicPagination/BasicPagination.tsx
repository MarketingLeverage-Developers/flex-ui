import React from 'react';
import Pagination, { PaginationValueType } from 'headless/Pagination/Pagination';
import styles from './BasicPagination.module.scss';
import BasicSizeSelect from './BasicSizeSelect/BasicSizeSelect';
import BasicPagingButtons from './BasicPagingButtons/BasicPagingButtons';
import BasicPages from './BasicPagingButtons/BasicPages/BasicPages';
import BasicPrev from './BasicPagingButtons/BasicPrev/BasicPrev';
import BasicNext from './BasicPagingButtons/BasicNext/BasicNext';
import BasicFasNext from './BasicPagingButtons/BasicFastNext/BasicFastNext';
import BasicFastPrev from './BasicPagingButtons/BasicFastPrev/BasicFastPrev';

type BasicPaginationProps = {
    children: React.ReactNode;
    defaultValue?: PaginationValueType;
};

const BasicPagination = ({ children, defaultValue }: BasicPaginationProps) => {
    return (
        <Pagination defaultValue={defaultValue}>
            <div className={styles.BasicPagination}>{children}</div>
        </Pagination>
    );
};

export default BasicPagination;

BasicPagination.SizeSelect = BasicSizeSelect;
BasicPagination.PagingButtons = BasicPagingButtons;
BasicPagination.FastPrev = BasicFastPrev;
BasicPagination.Prev = BasicPrev;
BasicPagination.Pages = BasicPages;
BasicPagination.Next = BasicNext;
BasicPagination.FastNext = BasicFasNext;
