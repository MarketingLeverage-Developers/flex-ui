import { useDropdown } from 'headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import styles from './BasicSelectItem.module.scss';

type BasicSelectItemProps = {
    children: React.ReactNode;
    value: string;
    onBasicSelectItemClick?: (value: string) => void;
};

const BasicSelectItem = ({ children, value, onBasicSelectItemClick }: BasicSelectItemProps) => {
    const { closeDropdown } = useDropdown();
    const { selectGroupValue } = useSelectGroup();

    const isCurrentItem = value === selectGroupValue;

    const handleBaiscSelectItemPageSizeItemClick = async (value: string) => {
        onBasicSelectItemClick && onBasicSelectItemClick(value);
        closeDropdown();
    };

    return (
        <SelectGroup.Item
            className={styles.BasicSelectItem}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
        >
            <div className={styles.Wrapper}>
                <div>{children}</div>
                {isCurrentItem && <FaCheck width={16} color="#f98131" />}
            </div>
        </SelectGroup.Item>
    );
};

export default BasicSelectItem;
