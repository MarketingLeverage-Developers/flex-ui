import React from 'react';
import { IconType } from 'react-icons';
import styles from './ProfileItem.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

type ProfileItemProps = {
    image?: string | null;
    value: string;
    isActive: boolean;
};

const ProfileItem = ({ image, isActive, value }: ProfileItemProps) => {
    const location = useLocation();

    const className = classNames(styles.ProfileItem, {
        [styles.Active]: isActive,
    });

    return (
        <div className={className}>
            {image ? <img src={image} alt="회사 이미지" /> : <div className={styles.Default} />}
        </div>
    );
};

export default ProfileItem;
