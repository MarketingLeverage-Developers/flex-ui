/** @jsxImportSource @emotion/react */
import React from 'react';
import BasicPagination from './BasicPagination';
import { PaginationValueType } from 'headless/Pagination/Pagination';
import { ReactComponent as PaginationArrow } from 'assets/images/pagination-arrow.svg';
import { css } from '@emotion/react';
import newStyled from '@emotion/styled';

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

    const pagingButtonWrapperStyle = css`
        display: flex;
        justify-content: center;
    `;

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

    const PaginationArrowLeft = newStyled(PaginationArrow)`
        transform: rotate(180deg);
    `;
    const PaginationArrowRight = newStyled(PaginationArrow)`
    `;

    return (
        <div css={pagingButtonWrapperStyle}>
            <BasicPagination.FastPrev
                defaultStyle={pagingButtonStyle}
                disabledStyle={pagingButtonDisabledStyle}
                onFastPrevClick={handleFastPrevButtonClick}
            >
                <PaginationArrowLeft />
                <PaginationArrowLeft />
            </BasicPagination.FastPrev>
            <BasicPagination.Prev
                defaultStyle={pagingButtonStyle}
                disabledStyle={pagingButtonDisabledStyle}
                onPrevClick={handlePrevButtonClick}
            >
                <PaginationArrowLeft />
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
                <PaginationArrowRight />
            </BasicPagination.Next>
            <BasicPagination.FastNext
                defaultStyle={pagingButtonStyle}
                disabledStyle={pagingButtonDisabledStyle}
                onFastNextClick={handleFastNextButtonClick}
            >
                <PaginationArrowRight />
                <PaginationArrowRight />
            </BasicPagination.FastNext>
        </div>
    );
};

export default BasicPaginationPagingButtons;
