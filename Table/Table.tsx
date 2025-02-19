import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';
import TableCell from './TableCell/TableCell';
import TableBody from './TableBody/TableBody';
import styles from './Table.module.scss';

type TableProps = {
    children: React.ReactNode;
    // custom style prop for the table element (필요 시 추가)
};

const Table = ({ children }: TableProps) => {
    return <table className={styles.table}>{children}</table>;
};

export default Table;

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
