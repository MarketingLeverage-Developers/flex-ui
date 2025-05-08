import React from 'react';
import { IconType } from 'react-icons';
import styles from './SidebarMenuIconText.module.scss';

type SidebarMenuIconTextProps = {
    icon?: IconType;
    label: string;
};

const SidebarMenuIconText = ({ icon: Icon, label }: SidebarMenuIconTextProps) => {
    return (
        <div className={styles['sidebar-menu-icon-text']}>
            {Icon && <Icon className={styles['sidebar-menu-icon-text__icon']} />}
            <span className={styles['sidebar-menu-icon-text__label']}>{label}</span>
        </div>
    );
};

export default SidebarMenuIconText;
