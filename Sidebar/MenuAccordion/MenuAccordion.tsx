import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import Accordion, { useAccordion } from 'headless/Accordion/Accordion';
import { FaChevronDown } from 'react-icons/fa6';
import styles from './MenuAccordion.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';

type AccordionProps = {
    children: React.ReactNode;
    value: string;
    icon: IconType;
    label: string;
};

const MenuAccordion = ({ value, children, icon, label }: AccordionProps) => {
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
                        <Sidebar.IconText icon={icon} label={label} />
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

export default withProvider(MenuAccordion);

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => {
        return (
            <Accordion>
                <WrappedComponent {...(props as any)} />
            </Accordion>
        );
    };
}
