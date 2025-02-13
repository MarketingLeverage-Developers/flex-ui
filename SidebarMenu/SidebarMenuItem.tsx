/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import Select from 'headless/Select/Select';
import React from 'react';
import SidebarMenu from './SidebarMenu';
import { IconType } from 'react-icons';

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
        font-weight: 700;
        padding: 0 10px;
        box-sizing: border-box;
        color: ${theme.colors.grayDark};
    `;
    const itemActiveStyle = css`
        background: ${theme.colors.blackAlpha.blackAlpha004};
    `;

    return (
        <Select.Option
            defaultStyle={itemDefaultStyle}
            activeStyle={itemActiveStyle}
            value={value}
            onOptionClick={onItemClick}
        >
            <SidebarMenu.IconText icon={icon} label={label} />
        </Select.Option>
    );
};

export default SidebarMenuItem;
