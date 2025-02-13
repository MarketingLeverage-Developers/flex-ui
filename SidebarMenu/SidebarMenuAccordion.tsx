/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import React from 'react';
import HeadlessAccordion from 'headless/Accordion/Accordion';
import SidebarMenu from './SidebarMenu';
import { IconType } from 'react-icons';
import Accordion from 'headless/Accordion/Accordion';

type AccordionProps = {
    children: React.ReactNode;
    icon: IconType;
    label: string;
};

const SidebarMenuAccordion = ({ children, icon, label }: AccordionProps) => {
    const theme = useTheme();

    const accordionDefaultStyle = css`
        width: 100%;
        height: 36px;
        border-radius: 8px;
        gap: 16px;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        padding: 0 10px;
        box-sizing: border-box;
        color: ${theme.colors.grayDark};
    `;
    const visibleDefaultStyle = css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    `;

    return (
        <Accordion>
            <Accordion.Box defaultStyle={accordionDefaultStyle}>
                <Accordion.Visible defalutStyle={visibleDefaultStyle}>
                    <SidebarMenu.IconText icon={icon} label={label} />
                    <Accordion.Button>열기</Accordion.Button>
                </Accordion.Visible>
                <HeadlessAccordion.Hidden>{children}</HeadlessAccordion.Hidden>
            </Accordion.Box>
        </Accordion>
    );
};

export default SidebarMenuAccordion;
