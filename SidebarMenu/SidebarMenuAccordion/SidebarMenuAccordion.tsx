import React from 'react';
import { IconType } from 'react-icons';
import Accordion from 'headless/Accordion/Accordion';
import { FaChevronDown } from 'react-icons/fa6';
import styles from './SidebarMenuAccordion.module.scss';
import SidebarMenu from '../SidebarMenu';

type AccordionProps = {
    children: React.ReactNode;
    icon: IconType;
    label: string;
};

const SidebarMenuAccordion = ({ children, icon, label }: AccordionProps) => {
    return (
        <Accordion>
            <Accordion.Box className={styles['sidebar-menu-accordion__box']}>
                <Accordion.Button className={styles['sidebar-menu-accordion__button']}>
                    <Accordion.Visible className={styles['sidebar-menu-accordion__visible']}>
                        <SidebarMenu.IconText icon={icon} label={label} />
                        <FaChevronDown size={12} />
                    </Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden className={styles['sidebar-menu-accordion__hidden']}>{children}</Accordion.Hidden>
            </Accordion.Box>
        </Accordion>
    );
};

export default SidebarMenuAccordion;
