import React from 'react';
import styles from './BasicTable.module.scss';
import BasicTableHeader from './BasicTableHeader/BasicTableHeader';
import BasicTableRow from './BasicTableRow/BasicTableRow';
import BasicTableCell from './BasicTableCell/BasicTableCell';
import BasicTableBody from './BasicTableBody/BasicTableBody';

type BasicTableProps = {
    children: React.ReactNode;
};

const BasicTable = ({ children }: BasicTableProps) => {
    return (
        <div className={styles['basic-table-wrapper']}>
            <table className={styles['basic-table']}>{children}</table>
        </div>
    );
};

export default BasicTable;

BasicTable.Header = BasicTableHeader;
BasicTable.Row = BasicTableRow;
BasicTable.Cell = BasicTableCell;
BasicTable.Body = BasicTableBody;
