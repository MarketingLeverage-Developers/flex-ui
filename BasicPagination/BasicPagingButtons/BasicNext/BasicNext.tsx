import classNames from 'classnames';
import Pagination, { usePagination } from 'headless/Pagination/Pagination';
import Next from 'headless/Pagination/Next';
import React from 'react';
import styles from '../BasicPagingButtons.module.scss';

type BasicNextProps = React.ComponentProps<typeof Next>;

const BasicNext = (props: BasicNextProps) => {
    const { hasNextPage } = usePagination();

    const hasNoNextPage = !hasNextPage;

    const combinedClassName = classNames(styles.PagingButton, {
        [styles.Disabled]: hasNoNextPage,
    });

    return <Pagination.Next className={combinedClassName} {...props} />;
};

export default BasicNext;
