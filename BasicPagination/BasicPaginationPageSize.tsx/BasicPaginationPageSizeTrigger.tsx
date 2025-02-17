import { css } from '@emotion/react';
import Dropdown from 'headless/Dropdown/Dropdown';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import { ReactComponent as PolygonImage } from 'assets/images/select-polygon.svg';
import React from 'react';

const BasicPaginationPageSizeTrigger = () => {
    const basicPaginationPageSizeTriggerStyle = css`
        width: 100%;
        height: 28px;
        padding: 6px 12px;
        border-radius: 6px;
        border: 1px solid #dbdbdb;
        background-color: #fff;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const basicPaginationPageSizeDisplayStyle = css``;

    return (
        <Dropdown.Trigger defaultStyle={basicPaginationPageSizeTriggerStyle}>
            <SelectGroup.Display defaultStyle={basicPaginationPageSizeDisplayStyle} />
            <PolygonImage />
        </Dropdown.Trigger>
    );
};

export default BasicPaginationPageSizeTrigger;
