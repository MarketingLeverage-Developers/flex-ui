import Dropdown from 'headless/Dropdown/Dropdown';
import React from 'react';
import styles from './ContentDropdown.module.scss';
import ContentDropdownItem from './ContentDropdownItem/ContentDropdownItem';
import ContentDropdownTrigger from './ContentDropdownTrigger/ContentDropdownTrigger';
import ContentDropdownContent from './ContentDropdownContent/ContentDropdownContent';
import ContentDropdownBox from './ContentDropdownBox/ContentDropdownBox';
import { useTableHeight } from '@/pages/inquiries/pages/indexes/pages/InquiryPage/components/TableHeightProvider/TableHeightProvider';

type HamburgerDropdownProps = {
    children: React.ReactNode;
};

const ContentDropdown = ({ children }: HamburgerDropdownProps) => {
    return (
        <Dropdown>
            <Dropdown.Box>{children}</Dropdown.Box>
        </Dropdown>
    );
};

export default ContentDropdown;

ContentDropdown.Item = ContentDropdownItem;
ContentDropdown.Content = ContentDropdownContent;
ContentDropdown.Trigger = ContentDropdownTrigger;
ContentDropdown.Box = ContentDropdownBox;
