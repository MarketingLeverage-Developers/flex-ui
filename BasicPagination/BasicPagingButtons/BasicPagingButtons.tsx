import BasicPagination from '../BasicPagination';
import { PaginationValueType } from 'headless/Pagination/Pagination';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { Pagination } from 'types/pagination';
import styles from './BasicPagingButtons.module.scss';

type BasicPagingButtonsProps = {
    onPagingButtonClick: (paginationValue: Pagination) => void;
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
        <div className={styles.BasicPagingButtons}>
            <BasicPagination.FastPrev onFastPrevClick={handleFastPrevButtonClick}>
                <div className={styles.Flex}>
                    <SlArrowLeft />
                    <SlArrowLeft />
                </div>
            </BasicPagination.FastPrev>
            <BasicPagination.Prev onPrevClick={handlePrevButtonClick}>
                <SlArrowLeft />
            </BasicPagination.Prev>
            <BasicPagination.Pages onPagesClick={handlePagesButtonClick} />
            <BasicPagination.Next onNextClick={handleNextButtonClick}>
                <SlArrowRight />
            </BasicPagination.Next>
            <BasicPagination.FastNext onFastNextClick={handleFastNextButtonClick}>
                <div className={styles.Flex}>
                    <SlArrowRight />
                    <SlArrowRight />
                </div>
            </BasicPagination.FastNext>
        </div>
    );
};

export default BasicPagingButtons;
