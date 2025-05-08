import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import Accordion, { useAccordion } from 'headless/Accordion/Accordion';
import { FaChevronDown } from 'react-icons/fa6';
import styles from './SidebarMenuAccordion.module.scss';
import SidebarMenu from '../SidebarMenu';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

type AccordionProps = {
    children: React.ReactNode;
    value: string;
    icon: IconType;
    label: string;
};

const SidebarMenuAccordion = ({ value, children, icon, label }: AccordionProps) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(value);

    const boxClassName = classNames(styles.Box, {
        [styles.Active]: isActive,
    });

    const buttonClassName = classNames(styles.Button, {
        [styles.Active]: isActive,
    });

    const { showAccordion } = useAccordion();

    useEffect(() => {
        if (isActive) {
            showAccordion();
        }
    }, []);

    return (
        <>
            <Accordion.Box className={boxClassName}>
                <Accordion.Button className={buttonClassName}>
                    <Accordion.Visible className={styles.Visible}>
                        <SidebarMenu.IconText icon={icon} label={label} />
                        <FaChevronDown size={12} />
                    </Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden className={styles.Hidden}>
                    <div className={styles.Content}>{children}</div>
                </Accordion.Hidden>
            </Accordion.Box>
        </>
    );
};

export default withProvider(SidebarMenuAccordion);

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => {
        return (
            <Accordion>
                <WrappedComponent {...(props as any)} />
            </Accordion>
        );
    };
}
