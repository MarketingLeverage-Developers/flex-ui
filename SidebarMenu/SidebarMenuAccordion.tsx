/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import React from 'react';
import SidebarMenu from './SidebarMenu';
import { IconType } from 'react-icons';
import Accordion from 'headless/Accordion/Accordion';
import { FaChevronDown } from 'react-icons/fa6';

type AccordionProps = {
    children: React.ReactNode;
    icon: IconType;
    label: string;
};

const SidebarMenuAccordion = ({ children, icon, label }: AccordionProps) => {
    const theme = useTheme();

    const accordionBoxStyle = css`
        width: 100%;
        height: auto;
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
        height: 36px;
    `;
    const accordionVisibleStyle = css`
        display: flex;
        flex-direction: column;
        gap: 3px;
        /* padding: 10px 0; */
    `;
    const accordionButtonStyle = css`
        background-color: inherit;
        border: none;
        padding: 0;
    `;

    return (
        <Accordion>
            <Accordion.Button defaultStyle={accordionButtonStyle}>
                <Accordion.Box defaultStyle={accordionBoxStyle}>
                    <Accordion.Visible defalutStyle={visibleDefaultStyle}>
                        <SidebarMenu.IconText icon={icon} label={label} />

                        <FaChevronDown size={12} />
                    </Accordion.Visible>
                    <Accordion.Hidden defalutStyle={accordionVisibleStyle}>{children}</Accordion.Hidden>
                </Accordion.Box>
            </Accordion.Button>
        </Accordion>
    );
};

export default SidebarMenuAccordion;
