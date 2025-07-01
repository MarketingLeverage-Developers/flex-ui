import React from 'react';
import { IconType } from 'react-icons';
import styles from './MenuIconText.module.scss';

type MenuIconTextProps = {
    icon?: IconType;
    label: string;
};

const MenuIconText = ({ icon: Icon, label }: MenuIconTextProps) => {
    return (
        <div className={styles['MenuIconText']}>
            {Icon && <Icon className={styles['sidebar-menu-icon-text__icon']} />}
            <span className={styles['sidebar-menu-icon-text__label']}>{label}</span>
        </div>
    );
};

export default MenuIconText;
