import React from 'react';
import styles from './TableFormSection.module.scss';
import Content from './Content';
import Row from './Row';
import Cell from './Cell';
import Title from './Title';
type TableFormSectionProps = { children: React.ReactNode };

const TableFormSection = ({ children }: TableFormSectionProps) => {
    return <div className={styles.TableFormSection}>{children}</div>;
};

export default TableFormSection;

TableFormSection.Title = Title;
TableFormSection.Content = Content;
TableFormSection.Row = Row;
TableFormSection.Cell = Cell;
