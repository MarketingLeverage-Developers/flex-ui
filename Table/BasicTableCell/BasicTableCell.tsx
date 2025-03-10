import React from 'react';
import styles from './BasicTableCell.module.scss';

type BasicTableCellProps = {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
};

const BasicTableCell = ({ children, align = 'center' }: BasicTableCellProps) => {
    const alignClass = styles[`basic-table-cell--${align}`];

    return <td className={`${styles['basic-table-cell']} ${alignClass}`}>{children}</td>;
};

export default BasicTableCell;
