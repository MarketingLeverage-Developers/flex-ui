import React from 'react';
import { IconType } from 'react-icons';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import styles from './SidebarMenuItem.module.scss';
import SidebarMenu from '../SidebarMenu';

type SidebarMenuItemProps = {
    label: string;
    value: string;
    icon: IconType;
    onItemClick: (value: string) => void;
};

const SidebarMenuItem = ({ label, value, icon, onItemClick }: SidebarMenuItemProps) => {
    return (
        <SelectGroup.Item className={styles['sidebar-menu-item']} value={value} onSelectGroupItemClick={onItemClick}>
            <SidebarMenu.IconText icon={icon} label={label} />
        </SelectGroup.Item>
    );
};

export default SidebarMenuItem;
