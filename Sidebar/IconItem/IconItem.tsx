import React from 'react';
import { IconType } from 'react-icons';
import styles from './IconItem.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

type IconItemProps = {
    icon?: IconType;
    value: string;
};

const IconItem = ({ icon: Icon, value }: IconItemProps) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(value);

    const className = classNames(styles.IconItem, {
        [styles.Active]: isActive,
    });

    return <div className={className}>{Icon && <Icon className={styles.Icon} />}</div>;
};

export default IconItem;
