import React, { HTMLAttributes, useEffect, useRef } from 'react';
import styles from './ChartTable.module.scss';
import Header from './Header/Header';
import Row from './Row/Row';
import Cell from './Cell/Cell';
import Body from './Body/Body';
import Content from './Content/Content';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type ChartTableProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    totalWidth?: number;
    tableLayout?: 'fixed' | 'auto';
};

const ChartTable = ({ children, totalWidth, tableLayout = 'fixed', ...props }: ChartTableProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': totalWidth ? `${totalWidth}px` : '100%',
        '--table-layout': tableLayout,
    };

    return (
        <div className={styles.ChartTableWrapper} {...props} style={{ ...cssVariables, ...props.style }}>
            <table className={styles.ChartTable}>{children}</table>
        </div>
    );
};

export default ChartTable;

ChartTable.Header = Header;
ChartTable.Row = Row;
ChartTable.Cell = Cell;
ChartTable.Body = Body;
ChartTable.Content = Content;
