import React, { ReactNode } from 'react';
import styles from './SummaryBox.module.scss';

type ColProps = {
    children: ReactNode;
};

const Col = ({ children }: ColProps) => {
    return <div className={styles.Col}>{children}</div>;
};

export default Col;
