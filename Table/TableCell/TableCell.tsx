import React from 'react';
import styles from './TableCell.module.scss';

type TableCellProps = {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
};

const TableCell = ({ children, align = 'center' }: TableCellProps) => {
    const alignClass = styles[`table-cell--${align}`];

    return <div className={`${styles['table-cell']} ${alignClass}`}>{children}</div>;
};

export default TableCell;
