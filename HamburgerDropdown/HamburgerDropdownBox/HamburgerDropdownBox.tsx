import Dropdown from 'headless/Dropdown/Dropdown';
import React from 'react';
import styles from './HamburgerDropdownBox.module.scss';

type HamburgerDropdownBoxProps = {
    children: React.ReactNode;
};

const HamburgerDropdownBox = ({ children }: HamburgerDropdownBoxProps) => {
    return <Dropdown.Box className={styles.HamburgerDropdownBox}>{children}</Dropdown.Box>;
};

export default HamburgerDropdownBox;
