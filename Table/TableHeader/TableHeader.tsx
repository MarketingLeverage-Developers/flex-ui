import React from 'react';
import styles from './TableHeader.module.scss';

type TableHeaderProps = {
    children: React.ReactNode;
};

const TableHeader = ({ children }: TableHeaderProps) => {
    return (
        <thead>
            <tr className={styles['table-header']}>{children}</tr>
        </thead>
    );
};

export default TableHeader;
