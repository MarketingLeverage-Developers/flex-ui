import React, { HTMLAttributes, useEffect, useRef } from 'react';
import styles from './DefaultTable.module.scss';
import Header from './Header/Header';
import Row from './Row/Row';
import Cell from './Cell/Cell';
import Body from './Body/Body';
import Content from './Content/Content';
import ResizableCell from './Resizer/Resizer';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type DefaultTableProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    totalWidth?: number;
    tableLayout?: 'fixed' | 'auto';
};

const DefaultTable = ({ children, totalWidth, tableLayout = 'fixed', ...props }: DefaultTableProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': totalWidth ? `${totalWidth}px` : '100%',
        '--table-layout': tableLayout,
    };

    return (
        <div className={styles.DefaultTableWrapper} {...props} style={{ ...cssVariables, ...props.style }}>
            <table className={styles.DefaultTable}>{children}</table>
        </div>
    );
};

export default DefaultTable;

DefaultTable.Header = Header;
DefaultTable.Row = Row;
DefaultTable.Cell = Cell;
DefaultTable.Body = Body;
DefaultTable.Content = Content;
DefaultTable.ResizableCell = ResizableCell;
