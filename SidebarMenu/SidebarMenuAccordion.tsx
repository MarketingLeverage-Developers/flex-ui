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
        padding: 0 10px;
    `;
    const accordionButtonStyle = css`
        width: 100%;
        background-color: inherit;
        border: none;
        padding: 0 10px;
        color: #646f7a;
        font-size: 14px;
        font-weight: 600;
        box-sizing: border-box;
        cursor: pointer;
    `;

    return (
        <Accordion>
            <Accordion.Box defaultStyle={accordionBoxStyle}>
                <Accordion.Button defaultStyle={accordionButtonStyle}>
                    <Accordion.Visible defalutStyle={visibleDefaultStyle}>
                        <SidebarMenu.IconText icon={icon} label={label} />
                        {/* <Accordion.Button defaultStyle={accordionButtonStyle}> */}
                        <FaChevronDown size={12} />
                        {/* </Accordion.Button> */}
                    </Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden defalutStyle={accordionVisibleStyle}>{children}</Accordion.Hidden>
            </Accordion.Box>
        </Accordion>
    );
};

export default SidebarMenuAccordion;
