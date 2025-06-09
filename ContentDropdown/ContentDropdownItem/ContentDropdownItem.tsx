import { useDropdown } from 'headless/Dropdown/Dropdown';
import React, { MouseEventHandler } from 'react';
import styles from './ContentDropdownItem.module.scss';
import Flex from 'headful/Flex/Flex';

type ContentDropdownItemProps = {
    children: React.ReactNode;
    onHamburgerDropdownItemClick?: () => void;
};

const ContentDropdownItem = ({ children, onHamburgerDropdownItemClick }: ContentDropdownItemProps) => {
    const { closeDropdown } = useDropdown();

    const handleItemClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        onHamburgerDropdownItemClick && onHamburgerDropdownItemClick();
        closeDropdown();
    };

    return (
        <Flex onClick={handleItemClick} className={styles.HamburgerDropdownItem} alignItems="center">
            {children}
        </Flex>
    );
};

export default ContentDropdownItem;
