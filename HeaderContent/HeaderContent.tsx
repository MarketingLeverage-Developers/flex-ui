import React from 'react';
import styles from './HeaderContent.module.scss';

type HeaderContentProps = {
    children: React.ReactNode;
};

const HeaderContent = ({ children }: HeaderContentProps) => {
    return <div className={styles.HeaderContent}>{children}</div>;
};

export default HeaderContent;
