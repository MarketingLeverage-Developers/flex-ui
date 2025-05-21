import React from 'react';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import styles from './SidebarMenuItem.module.scss';
import classNames from 'classnames';

type SidebarMenuItemProps = {
    // label: string;
    // value: string;
    // icon?: IconType;
    // onItemClick: (value: SelectGroupValue) => void;
} & React.ComponentProps<typeof SelectGroup.Item>;

const SidebarMenuItem = ({ value, onSelectGroupItemClick }: SidebarMenuItemProps) => {
    const { selectGroupValue } = useSelectGroup();

    // const displayLabel = typeof value === 'string' ? value : value.label;
    console.log('디버그', selectGroupValue, value);

    const combinedClassName = classNames(styles.SidebarMenuItem, {
        [styles.Active]: (selectGroupValue as { label: string; value: any }).value.startsWith(
            (value as { label: string; value: any }).value
        ),
    });

    return (
        <SelectGroup.Item className={combinedClassName} value={value} onSelectGroupItemClick={onSelectGroupItemClick}>
            {/* <SidebarMenu.IconText icon={icon} label={label} /> */}
        </SelectGroup.Item>
    );
};

export default SidebarMenuItem;
