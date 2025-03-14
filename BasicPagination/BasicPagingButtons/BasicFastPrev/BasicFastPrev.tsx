import classNames from 'classnames';
import Pagination, { usePagination } from 'headless/Pagination/Pagination';
import FastPrev from 'headless/Pagination/FastPrev';
import React from 'react';
import styles from '../BasicPagingButtons.module.scss';

type BasicFastPrevProps = React.ComponentProps<typeof FastPrev>;

const BasicFastPrev = (props: BasicFastPrevProps) => {
    const { hasFastPrevPage } = usePagination();

    const hasNoFastPrevPage = !hasFastPrevPage;

    const combinedClassName = classNames(styles.PagingButton, {
        [styles.Disabled]: hasNoFastPrevPage,
    });

    return <Pagination.FastPrev className={combinedClassName} {...props} />;
};

export default BasicFastPrev;
