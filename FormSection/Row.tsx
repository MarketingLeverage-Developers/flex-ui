import React from 'react';
import styles from './FormSection.module.scss';
type RowProps = {
    children: React.ReactNode;
};
const Row = ({ children }: RowProps) => {
    return <div className={styles.Row}>{children}</div>;
};

export default Row;
