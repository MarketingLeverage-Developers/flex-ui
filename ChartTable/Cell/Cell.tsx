import React, { ChangeEventHandler, TdHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Cell.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';

type CellProps = {
    children?: React.ReactNode | string;
    align?: 'left' | 'center' | 'right';
    asHeader?: boolean;
    isEditable?: boolean;
    width?: number;
    onTableCellChange?: (value: string) => void;
    value?: string | number;
    bgColor?: HexColor;
    noBorder?: boolean;
} & TdHTMLAttributes<HTMLTableCellElement>;

const Cell = ({
    children,
    align = 'left',
    asHeader,
    isEditable = false,
    width,
    onTableCellChange,
    value,
    bgColor,
    noBorder = false,
    ...props
}: CellProps) => {
    const handleTableCellChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value as string;
        onTableCellChange && onTableCellChange(value);
    };

    const alignMap = {
        left: styles.Left,
        right: styles.Right,
        center: styles.Center,
    };

    const cellClasses = classNames(styles.Cell, {
        [styles.NoBorder]: noBorder,
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--cell-width': width ? `${width}px` : undefined,
        '--background': bgColor,
    };

    return (
        <td {...props} className={cellClasses} style={{ ...cssVariables, ...props.style }}>
            {children}
        </td>
    );
};

export default Cell;
