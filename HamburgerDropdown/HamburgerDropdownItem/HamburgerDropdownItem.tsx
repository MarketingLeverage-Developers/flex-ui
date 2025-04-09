import { useDropdown } from 'headless/Dropdown/Dropdown';
import React, { MouseEventHandler } from 'react';
import styles from './HamburgerDropdownItem.module.scss';
import Flex from 'headful/Flex/Flex';

type HamburgerDropdownItemProps = {
    children: React.ReactNode;
    onHamburgerDropdownItemClick?: () => void;
};

const HamburgerDropdownItem = ({ children, onHamburgerDropdownItemClick }: HamburgerDropdownItemProps) => {
    const { closeDropdown } = useDropdown();

    const handleItemClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        onHamburgerDropdownItemClick && onHamburgerDropdownItemClick();
        closeDropdown();
    };

    return (
        <div className={styles.HamburgerDropdownItem} onClick={handleItemClick}>
            {children}
        </div>
    );
};

export default HamburgerDropdownItem;
