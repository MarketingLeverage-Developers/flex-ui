import React from 'react';
import styles from './DesktopOnly.module.scss';

type DesktopOnlyProps = {
    children: React.ReactNode;
};

const DesktopOnly = ({ children }: DesktopOnlyProps) => {
    return <div className={styles.DesktopOnly}>{children}</div>;
};

export default DesktopOnly;
