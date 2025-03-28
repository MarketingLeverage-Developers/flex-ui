import Dropdown from 'headless/Dropdown/Dropdown';
import React from 'react';
import HamburgerDropdownItem from './HamburgerDropdownItem/HamburgerDropdownItem';
import HamburgerDropdownContent from './HamburgerDropdownContent/HamburgerDropdownContent';
import HamburgerDropdownTrigger from './HamburgerDropdownTrigger/HamburgerDropdownTrigger';
import styles from './HamburgerDropdown.module.scss';
import HamburgerDropdownBox from './HamburgerDropdownBox/HamburgerDropdownBox';

type HamburgerDropdownProps = {
    children: React.ReactNode;
};

const HamburgerDropdown = ({ children }: HamburgerDropdownProps) => {
    return (
        <Dropdown>
            <Dropdown.Box className={styles['basic-select__box']}>{children}</Dropdown.Box>
        </Dropdown>
    );
};

export default HamburgerDropdown;

HamburgerDropdown.Item = HamburgerDropdownItem;
HamburgerDropdown.Content = HamburgerDropdownContent;
HamburgerDropdown.Trigger = HamburgerDropdownTrigger;
HamburgerDropdown.Box = HamburgerDropdownBox;
