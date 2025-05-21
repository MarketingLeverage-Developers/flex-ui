import React from 'react';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import styles from './SidebarMenu.module.scss';
import SidebarMenuItem from './SidebarMenuItem/SidebarMenuItem';
import SidebarMenuAccordion from './SidebarMenuAccordion/SidebarMenuAccordion';
import SidebarMenuIconText from './SidebarMenuIconText/SidebarMenuIconText';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';

type SidebarMenuProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
};

const SidebarMenu = ({ children, defaultValue }: SidebarMenuProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <div className={styles['sidebar-menu']}>{children}</div>
        </SelectGroup>
    );
};

export default SidebarMenu;

SidebarMenu.Item = SidebarMenuItem;
SidebarMenu.Accordion = SidebarMenuAccordion;
SidebarMenu.IconText = SidebarMenuIconText;
