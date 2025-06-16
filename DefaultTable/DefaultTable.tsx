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
};

const DefaultTable = ({ children, totalWidth, ...props }: DefaultTableProps) => {
    const cssVariables: CSSPropertiesWithVars = totalWidth ? { '--width': `${totalWidth}px` } : { '--width': '100%' };

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
