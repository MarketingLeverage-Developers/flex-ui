/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { IconType } from 'react-icons';

type SidebarMenuIconTextProps = {
    icon: IconType;
    label: string;
};

const SidebarMenuIconText = ({ icon: Icon, label }: SidebarMenuIconTextProps) => {
    const accordionDefaultStyle = css`
        display: flex;
        gap: 16px;
    `;

    return (
        <div css={[accordionDefaultStyle]}>
            <Icon />
            <span>{label}</span>
        </div>
    );
};

export default SidebarMenuIconText;
