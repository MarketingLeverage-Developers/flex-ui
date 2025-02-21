import React from 'react';
import styles from './BasicTableRow.module.scss';

type BasicTableRowProps = {
    children: React.ReactNode;
};

const BasicTableRow = ({ children }: BasicTableRowProps) => {
    return <tr className={styles['basic-table-row']}>{children}</tr>;
};

export default BasicTableRow;
