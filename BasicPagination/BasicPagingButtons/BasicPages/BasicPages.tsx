import classNames from 'classnames';
import { usePagination } from 'headless/Pagination/Pagination';
import React from 'react';
import styles from '../BasicPagingButtons.module.scss';
import { Pagination } from 'types/pagination';

// type BasicPagesProps = React.ReactCo

type BsicPagesProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onPagesClick?: (paginationValue: Pagination) => void;
};

const BasicPages = ({ onPagesClick, ...props }: BsicPagesProps) => {
    const { paginationValue, goToPage, endPage, startPage } = usePagination();
    const { page } = paginationValue;

    const handlePagesClick = (pageValue: number) => {
        const newPaginationValue = goToPage(pageValue);
        onPagesClick && onPagesClick(newPaginationValue);
    };

    return (
        <>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                const currentPage = startPage + index;
                const isActive = currentPage === page;

                const combinedClassName = classNames(styles.PagingButton, {
                    [styles.Active]: isActive,
                });

                return (
                    <button
                        key={currentPage}
                        onClick={() => handlePagesClick(currentPage)}
                        disabled={isActive}
                        className={combinedClassName}
                        {...props}
                    >
                        {currentPage}
                    </button>
                );
            })}
        </>
    );
};

export default BasicPages;
