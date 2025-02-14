/** @jsxImportSource @emotion/react */
import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarMenuAccordion from './SidebarMenuAccordion';
import SidebarMenuIconText from './SidebarMenuIconText';
import { css } from '@emotion/react';
import SelectGroup from 'headless/SelectGroup/SelectGroup';

type SidebarMenuProps = {
    children: React.ReactNode;
};

const SidebarMenu = ({ children }: SidebarMenuProps) => {
    const sidebarMenuStyle = css`
        width: 100%;
        padding: 18px 24px;
        box-sizing: border-box;
    `;

    return (
        <SelectGroup>
            <div css={sidebarMenuStyle}>{children}</div>
        </SelectGroup>
    );
};

export default SidebarMenu;

SidebarMenu.Item = SidebarMenuItem;
SidebarMenu.Accordion = SidebarMenuAccordion;
SidebarMenu.IconText = SidebarMenuIconText;
