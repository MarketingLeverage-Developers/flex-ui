import { css } from '@emotion/react';
import { useDropdown } from 'headless/Dropdown/Dropdown';
import { PaginationValueType, usePagination } from 'headless/Pagination/Pagination';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import React from 'react';

type BasicPaginationPageSizeItemProps = {
    children: React.ReactNode;
    value: string;
    onBasicPaginationPageSizeItemClick?: (paginationValue: PaginationValueType) => Promise<void>;
};

const BasicPaginationPageSizeItem = ({
    children,
    value,
    onBasicPaginationPageSizeItemClick,
}: BasicPaginationPageSizeItemProps) => {
    const { closeDropdown } = useDropdown();
    const { changeSize } = usePagination();

    const handleBaiscPaginationPageSizeItemClick = async () => {
        const newPaginationValue = changeSize(parseInt(value));
        onBasicPaginationPageSizeItemClick && (await onBasicPaginationPageSizeItemClick(newPaginationValue));
        closeDropdown();
    };

    const basicPaginationPageSizeItemStyle = css`
        height: 29px;
        padding: 6px 12px;
        box-sizing: border-box;
    `;
    const basicPaginationPageSizeItemActiveStyle = css`
        background-color: #e9e9ea;
    `;

    return (
        <SelectGroup.Item
            defaultStyle={basicPaginationPageSizeItemStyle}
            activeStyle={basicPaginationPageSizeItemActiveStyle}
            value={value}
            onSelectGroupItemClick={handleBaiscPaginationPageSizeItemClick}
        >
            {children}
        </SelectGroup.Item>
    );
};

export default BasicPaginationPageSizeItem;
