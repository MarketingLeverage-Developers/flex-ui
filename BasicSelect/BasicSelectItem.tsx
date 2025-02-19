import { css } from '@emotion/react';
import FlexBox from 'headful/FlexBox/FlexBox';
import { useDropdown } from 'headless/Dropdown/Dropdown';
import { PaginationValueType, usePagination } from 'headless/Pagination/Pagination';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

type BasicSelectItemProps = {
    children: React.ReactNode;
    value: string;
    onBasicSelectItemClick?: () => void;
};

const BasicSelectItem = ({ children, value, onBasicSelectItemClick }: BasicSelectItemProps) => {
    const { closeDropdown } = useDropdown();
    const { selectGroupValue } = useSelectGroup();

    const isCurrentItem = value === selectGroupValue;

    const handleBaiscSelectItemPageSizeItemClick = async () => {
        onBasicSelectItemClick && onBasicSelectItemClick();
        closeDropdown();
    };

    const basicPaginationPageSizeItemStyle = css`
        height: 32px;
        padding: 0 6px;
        margin: 0 8px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-family: Pretendard;
        font-weight: 600;
        color: #3e4449;
        border-radius: 8px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.015);
        }
    `;
    const basicPaginationPageSizeItemActiveStyle = css`
        /* background-color: #e9e9ea; */
    `;

    return (
        <SelectGroup.Item
            defaultStyle={basicPaginationPageSizeItemStyle}
            activeStyle={basicPaginationPageSizeItemActiveStyle}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
        >
            <FlexBox justifyContent="space-between" width={`100%`}>
                <div>{children}</div>
                {isCurrentItem && <FaCheck width={16} color="#f98131" />}
            </FlexBox>
        </SelectGroup.Item>
    );
};

export default BasicSelectItem;
