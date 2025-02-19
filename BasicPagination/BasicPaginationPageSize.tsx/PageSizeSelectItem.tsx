import BasicSelect from 'headful/BasicSelect/BasicSelect';
import { PaginationValueType, usePagination } from 'headless/Pagination/Pagination';
import React from 'react';

type PageSizeSelectItemProps = {
    children: React.ReactNode;
    value: string;
    onPageSizeSelectItemClick?: (paginationValue: PaginationValueType) => Promise<void>;
};

const PageSizeSelectItem = ({ children, value, onPageSizeSelectItemClick }: PageSizeSelectItemProps) => {
    const { changeSize } = usePagination();

    const handleBaiscPaginationPageSizeItemClick = async () => {
        const newPaginationValue = changeSize(parseInt(value));
        onPageSizeSelectItemClick && (await onPageSizeSelectItemClick(newPaginationValue));
    };

    return (
        <BasicSelect.Item value={value} onBasicSelectItemClick={handleBaiscPaginationPageSizeItemClick}>
            {children}
        </BasicSelect.Item>
    );
};

export default PageSizeSelectItem;
