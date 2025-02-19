import React from 'react';
import BasicPagination from '../BasicPagination';
import { PaginationValueType, usePagination } from 'headless/Pagination/Pagination';
import { ReactComponent as PaginationArrow } from 'assets/images/pagination-arrow.svg';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import FlexBox from 'headful/FlexBox/FlexBox';
import styles from './BasicPaginationPagingButtons.module.scss';

type BasicPaginationPagingButtonsProps = {
    onPagingButtonClick: (paginationValue: PaginationValueType) => Promise<void>;
};

const BasicPaginationPagingButtons = ({ onPagingButtonClick }: BasicPaginationPagingButtonsProps) => {
    const { hasNextPage, hasPrevPage, hasFastNextPage, hasFastPrevPage } = usePagination();

    const handleFastPrevButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handlePrevButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handlePagesButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handleNextButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handleFastNextButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };

    return (
        <FlexBox justifyContent="center" alignItems="center">
            <BasicPagination.FastPrev
                className={`${styles['paging-button']} ${hasFastPrevPage || styles['paging-button--disabled']}`}
                onFastPrevClick={handleFastPrevButtonClick}
            >
                <FlexBox>
                    <SlArrowLeft />
                    <SlArrowLeft />
                </FlexBox>
            </BasicPagination.FastPrev>
            <BasicPagination.Prev
                className={`${styles['paging-button']} ${hasPrevPage || styles['paging-button--disabled']}`}
                onPrevClick={handlePrevButtonClick}
            >
                <SlArrowLeft />
            </BasicPagination.Prev>
            <BasicPagination.Pages
                className={styles['paging-button']}
                activeClassName={styles['paging-button--active']}
                onPagesClick={handlePagesButtonClick}
            />
            <BasicPagination.Next
                className={`${styles['paging-button']} ${hasNextPage || styles['paging-button--disabled']}`}
                onNextClick={handleNextButtonClick}
            >
                <SlArrowRight />
            </BasicPagination.Next>
            <BasicPagination.FastNext
                className={`${styles['paging-button']} ${hasFastNextPage || styles['paging-button--disabled']}`}
                onFastNextClick={handleFastNextButtonClick}
            >
                <FlexBox>
                    <SlArrowRight />
                    <SlArrowRight />
                </FlexBox>
            </BasicPagination.FastNext>
        </FlexBox>
    );
};

export default BasicPaginationPagingButtons;
