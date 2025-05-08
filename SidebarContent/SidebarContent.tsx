import React from 'react';
import styles from './SidebarContent.module.scss';

type SidebarContentProps = {
    children: React.ReactNode;
};

const SidebarContent = ({ children }: SidebarContentProps) => {
    return <div className={styles.SidebarContent}>{children}</div>;
};

export default SidebarContent;
