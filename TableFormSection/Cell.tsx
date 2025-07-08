import React from 'react';
import styles from './TableFormSection.module.scss';
type CellProps = {
    label?: string;
    value?: React.ReactNode;
};

const Cell = ({ label, value }: CellProps) => {
    return (
        <div className={styles.Cell}>
            <div className={styles.CellLabel}>{label}</div>
            <div className={styles.CellValue}>{value}</div>
        </div>
    );
};

export default Cell;
