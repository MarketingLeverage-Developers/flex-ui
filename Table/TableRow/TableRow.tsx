import React from 'react';
import styles from './TableRow.module.scss';

type TableRowProps = {
    children: React.ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
    return <tr className={styles['table-row']}>{children}</tr>;
};

export default TableRow;
