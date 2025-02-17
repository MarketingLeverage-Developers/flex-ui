import Dropdown from 'headless/Dropdown/Dropdown';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import BasicPaginationPageSizeItem from './BasicPaginationPageSizeItem';
import BasicPaginationPageSizeContent from './BasicPaginationPageSizeContent';
import BasicPaginationPageSizeTrigger from './BasicPaginationPageSizeTrigger';
import { usePagination } from 'headless/Pagination/Pagination';
import { css } from '@emotion/react';

type BasicPaginationPageSizeProps = {
    children: React.ReactNode;
    width?: number;
};

const BasicPaginationPageSize = ({ children, width = 100 }: BasicPaginationPageSizeProps) => {
    const { paginationValue } = usePagination();

    const basicPaginationPageSizeStyle = css`
        width: ${width}px;
        font-size: 14px;
        cursor: pointer;
    `;

    return (
        <SelectGroup defaultValue={paginationValue.size.toString()}>
            <Dropdown>
                <Dropdown.Box defaultStyle={basicPaginationPageSizeStyle}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default BasicPaginationPageSize;

BasicPaginationPageSize.Item = BasicPaginationPageSizeItem;
BasicPaginationPageSize.Content = BasicPaginationPageSizeContent;
BasicPaginationPageSize.Trigger = BasicPaginationPageSizeTrigger;
