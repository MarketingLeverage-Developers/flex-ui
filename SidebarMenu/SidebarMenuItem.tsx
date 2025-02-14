/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import React from 'react';
import SidebarMenu from './SidebarMenu';
import { IconType } from 'react-icons';
import SelectGroup from 'headless/SelectGroup/SelectGroup';

type SidebarMenuItemProps = {
    label: string;
    value: string;
    icon: IconType;
    onItemClick: (value: string) => void;
};

const SidebarMenuItem = ({ label, value, icon, onItemClick }: SidebarMenuItemProps) => {
    const theme = useTheme();

    const itemDefaultStyle = css`
        width: 100%;
        height: 36px;
        border-radius: 8px;
        display: flex;
        gap: 16px;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        padding: 0 10px;
        box-sizing: border-box;
        color: #646f7a;
        cursor: pointer;

        &:hover {
            background: ${theme.colors.blackAlpha.blackAlpha008};
        }
    `;
    const itemActiveStyle = css`
        color: #242a30;
        background: ${theme.colors.blackAlpha.blackAlpha004};
    `;

    return (
        <SelectGroup.Item
            defaultStyle={itemDefaultStyle}
            activeStyle={itemActiveStyle}
            value={value}
            onSelectGroupItemClick={onItemClick}
        >
            <SidebarMenu.IconText icon={icon} label={label} />
        </SelectGroup.Item>
    );
};

export default SidebarMenuItem;
