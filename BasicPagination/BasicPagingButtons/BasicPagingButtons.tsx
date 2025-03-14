import React from 'react';
import BasicPagination from '../BasicPagination';
import { PaginationValueType } from 'headless/Pagination/Pagination';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import FlexBox from 'headful/Flex/Flex';
import { Pagination } from 'types/pagination';

type BasicPagingButtonsProps = {
    onPagingButtonClick: (paginationValue: Pagination) => Promise<void>;
};

const BasicPagingButtons = ({ onPagingButtonClick }: BasicPagingButtonsProps) => {
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
            <BasicPagination.FastPrev onFastPrevClick={handleFastPrevButtonClick}>
                <FlexBox>
                    <SlArrowLeft />
                    <SlArrowLeft />
                </FlexBox>
            </BasicPagination.FastPrev>
            <BasicPagination.Prev onPrevClick={handlePrevButtonClick}>
                <SlArrowLeft />
            </BasicPagination.Prev>
            <BasicPagination.Pages onPagesClick={handlePagesButtonClick} />
            <BasicPagination.Next onNextClick={handleNextButtonClick}>
                <SlArrowRight />
            </BasicPagination.Next>
            <BasicPagination.FastNext onFastNextClick={handleFastNextButtonClick}>
                <FlexBox>
                    <SlArrowRight />
                    <SlArrowRight />
                </FlexBox>
            </BasicPagination.FastNext>
        </FlexBox>
    );
};

export default BasicPagingButtons;
