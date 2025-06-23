import React, { ReactNode } from 'react';
import styles from './SummaryBox.module.scss';

type RowProps = {
    children: ReactNode;
};

const Row = ({ children }: RowProps) => {
    return <div className={styles.Row}>{children}</div>;
};

export default Row;
