import React from 'react';
import styles from './BasicTableBody.module.scss';

type BasicTableBodyProps = {
    children: React.ReactNode;
};

const BasicTableBody = ({ children }: BasicTableBodyProps) => {
    return <tbody className={styles['basic-table-body']}>{children}</tbody>;
};

export default BasicTableBody;
