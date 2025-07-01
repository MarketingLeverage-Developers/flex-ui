import React, { useEffect } from 'react';
import { IconContext, IconType } from 'react-icons';
import Accordion, { useAccordion } from 'headless/Accordion/Accordion';
import { FaChevronDown } from 'react-icons/fa6';
import styles from './AccordionItem.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import Sidebar from '../CompanySidebar';
import MenuIconText from '../IconTextItem/MenuIconText';

type AccordionProps = {
    children: React.ReactNode;
    value: string;
    icon: IconType;
    label: string;
};

const AccordionItem = ({ value, children, icon, label }: AccordionProps) => {
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
                        <IconText icon={icon} label={label} />
                        <FaChevronDown className={styles.Icon} size={12} />
                    </Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden className={styles.Hidden}>
                    <div className={styles.Content}>{children}</div>
                </Accordion.Hidden>
            </Accordion.Box>
        </>
    );
};

export default withProvider(AccordionItem);

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => {
        return (
            <Accordion>
                <WrappedComponent {...(props as any)} />
            </Accordion>
        );
    };
}

type IconTextProps = {
    icon?: IconType;
    label: string;
};

const IconText = ({ icon: Icon, label }: IconTextProps) => {
    return (
        <div className={styles.IconText}>
            {Icon && <Icon />}
            <span>{label}</span>
        </div>
    );
};
