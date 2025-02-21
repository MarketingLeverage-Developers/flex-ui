import React from 'react';
import styles from './BasicTableHeader.module.scss';

type BasicTableHeaderProps = {
    children: React.ReactNode;
};

const BasicTableHeader = ({ children }: BasicTableHeaderProps) => {
    return (
        <thead>
            <tr className={styles['basic-table-header']}>{children}</tr>
        </thead>
    );
};

export default BasicTableHeader;
