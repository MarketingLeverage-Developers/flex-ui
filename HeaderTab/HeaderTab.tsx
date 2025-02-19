import React from 'react';
import styles from './HeaderTab.module.scss';

type HeaderTabProps = {
    children: React.ReactNode;
};

const HeaderTab = ({ children }: HeaderTabProps) => {
    return <div className={styles['header-tab']}>{children}</div>;
};

export default HeaderTab;
