import { css } from '@emotion/react';
import Dropdown from 'headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import { ReactComponent as PolygonImage } from 'assets/images/select-polygon.svg';
import React from 'react';
import FlexBox from 'headful/FlexBox/FlexBox';
import { VscClose } from 'react-icons/vsc';

type BasicSelectTriggerProps = {
    icon: React.ReactNode;
    label: React.ReactNode;
};

const BasicSelectTrigger = ({ icon, label }: BasicSelectTriggerProps) => {
    const { selectGroupValue } = useSelectGroup();

    const isSelected = selectGroupValue !== '';

    const basicPaginationPageSizeTriggerStyle = css`
        width: auto;
        height: 24px;
        padding: 0px 8px;
        border-radius: 6px;
        border: 1px solid ${isSelected ? '#3b86c8' : '#dbdbdb'};
        background-color: #fff;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${isSelected ? '#3b86c8' : '#242a307a'};
        font-family: Pretendard;
        font-size: 12px;
        font-weight: ${isSelected ? 600 : 500};
    `;
    const basicPaginationPageSizeDisplayStyle = css`
        color: ${isSelected && '#1C5592'};
    `;

    console.log('selectGroupValue: ', selectGroupValue);

    return (
        <Dropdown.Trigger defaultStyle={basicPaginationPageSizeTriggerStyle}>
            <FlexBox gap={4} alignItems="center">
                {icon}
                {label}
                <SelectGroup.Display defaultStyle={basicPaginationPageSizeDisplayStyle} />
                {/* {selectGroupValue !== '' ? <VscClose width={10} height={10} /> : <PolygonImage width={8} height={6} />} */}
            </FlexBox>
        </Dropdown.Trigger>
    );
};

export default BasicSelectTrigger;
