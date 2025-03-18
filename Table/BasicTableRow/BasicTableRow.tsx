import React, { HTMLAttributes, MouseEventHandler } from 'react';
import styles from './BasicTableRow.module.scss';

type BasicTableRowProps = HTMLAttributes<HTMLTableRowElement> & {
    children: React.ReactNode;
};

const BasicTableRow = ({ children, onMouseEnter, onMouseLeave, ...props }: BasicTableRowProps) => {
    return (
        <tr onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props} className={styles['basic-table-row']}>
            {children}
        </tr>
    );
};

export default BasicTableRow;
