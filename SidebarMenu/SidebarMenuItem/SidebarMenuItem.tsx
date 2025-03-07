import React from 'react';
import { IconType } from 'react-icons';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import styles from './SidebarMenuItem.module.scss';
import SidebarMenu from '../SidebarMenu';
import classNames from 'classnames';

type SidebarMenuItemProps = {
    label: string;
    value: string;
    icon: IconType;
    onItemClick: (value: string) => void;
};

const SidebarMenuItem = ({ label, value, icon, onItemClick }: SidebarMenuItemProps) => {
    const { selectGroupValue } = useSelectGroup();

    const combinedClassName = classNames(styles.SidebarMenuItem, {
        [styles.Active]: selectGroupValue.startsWith(value),
    });

    return (
        <SelectGroup.Item className={combinedClassName} value={value} onSelectGroupItemClick={onItemClick}>
            <SidebarMenu.IconText icon={icon} label={label} />
        </SelectGroup.Item>
    );
};

export default SidebarMenuItem;
