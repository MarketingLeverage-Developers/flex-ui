import classNames from 'classnames';
import Pagination, { usePagination } from 'headless/Pagination/Pagination';
import Prev from 'headless/Pagination/Prev';
import React from 'react';
import styles from '../BasicPagingButtons.module.scss';

type BasicPrevProps = React.ComponentProps<typeof Prev>;

const BasicPrev = (props: BasicPrevProps) => {
    const { hasPrevPage } = usePagination();

    const hasNoPrevPage = !hasPrevPage;

    const combinedClassName = classNames(styles.PagingButton, {
        [styles.Disabled]: hasNoPrevPage,
    });

    return <Pagination.Prev className={combinedClassName} {...props} />;
};

export default BasicPrev;
