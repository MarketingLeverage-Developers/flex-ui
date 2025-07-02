import React from 'react';
import styles from './HeaderContent.module.scss';

type MobileHeaderContentProps = {
    children: React.ReactNode;
};

const MobileHeaderContent = ({ children }: MobileHeaderContentProps) => {
    return <div className={styles.MobileHeaderContent}>{children}</div>;
};

export default MobileHeaderContent;
