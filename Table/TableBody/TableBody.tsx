import React from 'react';
import styles from './TableBody.module.scss';

type TableBodyProps = {
    children: React.ReactNode;
};

const TableBody = ({ children }: TableBodyProps) => {
    return <tbody className={styles['table-body']}>{children}</tbody>;
};

export default TableBody;
