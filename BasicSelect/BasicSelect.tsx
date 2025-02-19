import Dropdown from 'headless/Dropdown/Dropdown';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import BasicSelectItem from './BasicSelectItem';
import BasicSelectContent from './BasicSelectContent';
import BasicSelectTrigger from './BasicSelectTrigger';
import { usePagination } from 'headless/Pagination/Pagination';
import { css } from '@emotion/react';

type BasicSelectProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const BasicSelect = ({ children, defaultValue }: BasicSelectProps) => {
    const basicPaginationPageSizeStyle = css`
        /* display: flex; */
        font-size: 14px;
        cursor: pointer;
        align-self: flex-start;
    `;

    return (
        <SelectGroup defaultValue={defaultValue}>
            <Dropdown>
                <Dropdown.Box defaultStyle={basicPaginationPageSizeStyle}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default BasicSelect;

BasicSelect.Item = BasicSelectItem;
BasicSelect.Content = BasicSelectContent;
BasicSelect.Trigger = BasicSelectTrigger;
