/** @jsxImportSource @emotion/react */
import React from 'react';
import BasicPagination from './BasicPagination';
import { PaginationValueType } from 'headless/Pagination/Pagination';
import { ReactComponent as PaginationArrow } from 'assets/images/pagination-arrow.svg';
import { css } from '@emotion/react';
import newStyled from '@emotion/styled';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import FlexBox from 'headful/FlexBox/FlexBox';

type BasicPaginationPagingButtonsProps = {
    // children: React.ReactNode;
    onPagingButtonClick: (paginationValue: PaginationValueType) => Promise<void>;
};

const BasicPaginationPagingButtons = ({ onPagingButtonClick }: BasicPaginationPagingButtonsProps) => {
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

    const pagingButtonStyle = css`
        background: inherit;
        font-size: 16px;
        color: #888;
        border: none;
        cursor: pointer;
        font-family: Pretendard;
        font-weight: 400;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const pagingButtonDisabledStyle = css`
        color: #dedede;
        fill: #dedede !important;
        cursor: auto;
    `;

    const pagingButtonActiveStyle = css`
        background-color: #f98131;
        border-radius: 8px;
        padding: 6px 8px;
        color: #fff;
    `;

    return (
        <FlexBox justifyContent="center" alignItems="center">
            <BasicPagination.FastPrev
                defaultStyle={pagingButtonStyle}
                disabledStyle={pagingButtonDisabledStyle}
                onFastPrevClick={handleFastPrevButtonClick}
            >
                <FlexBox>
                    <SlArrowLeft />
                    <SlArrowLeft />
                </FlexBox>
            </BasicPagination.FastPrev>
            <BasicPagination.Prev
                defaultStyle={pagingButtonStyle}
                disabledStyle={pagingButtonDisabledStyle}
                onPrevClick={handlePrevButtonClick}
            >
                <SlArrowLeft />
            </BasicPagination.Prev>
            <BasicPagination.Pages
                defaultStyle={pagingButtonStyle}
                activeStyle={pagingButtonActiveStyle}
                onPagesClick={handlePagesButtonClick}
            />
            <BasicPagination.Next
                defaultStyle={pagingButtonStyle}
                disabledStyle={pagingButtonDisabledStyle}
                onNextClick={handleNextButtonClick}
            >
                <SlArrowRight />
            </BasicPagination.Next>
            <BasicPagination.FastNext
                defaultStyle={pagingButtonStyle}
                disabledStyle={pagingButtonDisabledStyle}
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
