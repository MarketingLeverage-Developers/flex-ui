import React, { HTMLAttributes, useEffect, useRef } from 'react';
import styles from './MobileDefaultTable.module.scss';
import Header from './Header/Header';
import Row from './Row/Row';
import Cell from './Cell/Cell';
import Body from './Body/Body';
import Content from './Content/Content';
import ResizableCell from './Resizer/Resizer';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type MobileDefaultTableProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    totalWidth?: number;
    tableLayout?: 'fixed' | 'auto';
};

const MobileDefaultTable = ({ children, totalWidth, tableLayout = 'fixed', ...props }: MobileDefaultTableProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': totalWidth ? `${totalWidth}px` : '100%',
        '--table-layout': tableLayout,
    };

    return (
        <div className={styles.MobileDefaultTableWrapper} {...props} style={{ ...cssVariables, ...props.style }}>
            <table className={styles.MobileDefaultTable}>{children}</table>
        </div>
    );
};

export default MobileDefaultTable;

MobileDefaultTable.Header = Header;
MobileDefaultTable.Row = Row;
MobileDefaultTable.Cell = Cell;
MobileDefaultTable.Body = Body;
MobileDefaultTable.Content = Content;
MobileDefaultTable.ResizableCell = ResizableCell;
