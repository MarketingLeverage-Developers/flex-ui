import React from 'react';
import styles from './EmptyArea.module.scss';

type EmptyAreaProps = {
    icon: React.ReactNode;
    title: React.ReactNode;
    subTitle?: React.ReactNode;
};

const EmptyArea = ({ icon, title, subTitle }: EmptyAreaProps) => {
    return (
        <div className={styles.EmptyArea}>
            {icon}
            <div className={styles.Title}>{title}</div>
            {subTitle && <div className={styles.SubTitle}>{subTitle}</div>}
        </div>
    );
};

export default EmptyArea;
