import React from 'react';
import styles from './Item.module.scss';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';

type ItemProps = {
    icon: React.ReactNode;
    label: string;
    pathValue: string;
    onMenuClick: (value: SelectGroupValue) => void;
};

const Item = ({ icon, label, pathValue, onMenuClick }: ItemProps) => {
    const { pathname } = useLocation();

    const isActive = pathname.startsWith(pathValue);

    const itemClassName = classNames(styles.Item, {
        [styles.Active]: isActive,
    });

    const handleItemClick = () => {
        onMenuClick({ value: pathValue } as SelectGroupValue);
    };

    return (
        <div className={itemClassName} onClick={handleItemClick}>
            <div className={styles.Icon}>{icon}</div>
            <div className={styles.Label}>
                <span>{label}</span>
            </div>
        </div>
    );
};

export default Item;
