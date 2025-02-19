import FlexBox from 'headful/FlexBox/FlexBox';
import { useDropdown } from 'headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import styles from './BasicSelectItem.module.scss';

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

    return (
        <SelectGroup.Item
            className={styles['basic-select-item']}
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
