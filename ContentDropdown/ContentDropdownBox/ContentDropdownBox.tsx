import Dropdown from 'headless/Dropdown/Dropdown';
import React from 'react';
import styles from './ContentDropdownBox.module.scss';

type ContentDropdownBoxProps = {
    children: React.ReactNode;
};

const ContentDropdownBox = ({ children }: ContentDropdownBoxProps) => {
    return <Dropdown.Box className={styles.HamburgerDropdownBox}>{children}</Dropdown.Box>;
};

export default ContentDropdownBox;
