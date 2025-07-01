import React from 'react';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import styles from './Sidebar.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import MenuItem from './MenuItem/MenuItem';
import MenuAccordion from './MenuAccordion/MenuAccordion';
import MenuIconText from './MenuIconText/MenuIconText';

type SidebarProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
};

const Sidebar = ({ children, defaultValue }: SidebarProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <div className={styles.Sidebar}>{children}</div>
        </SelectGroup>
    );
};

export default Sidebar;

Sidebar.Item = MenuItem;
Sidebar.Accordion = MenuAccordion;
Sidebar.IconText = MenuIconText;
