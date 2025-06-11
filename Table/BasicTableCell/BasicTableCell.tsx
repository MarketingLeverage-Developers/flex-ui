import React, { ChangeEventHandler, TdHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './BasicTableCell.module.scss';
import { HexColor } from '@/ui-kit/src/types';

type BasicTableCellProps = {
    children?: React.ReactNode | string;
    align?: 'left' | 'center' | 'right';
    asHeader?: boolean;
    headerColor?: HexColor;
    Border?: boolean;
    headerRadius?: number;
    isEditable?: boolean; // 편집 가능 여부 prop
    width?: number;
    onTableCellChange?: (value: string) => void;
    value?: string | number;
} & TdHTMLAttributes<HTMLTableCellElement>;

const BasicTableCell = ({
    headerRadius = 0,
    children,
    align = 'left',
    asHeader,
    headerColor,
    Border = false,
    isEditable = false,
    width,
    onTableCellChange,
    value,
    ...props
}: BasicTableCellProps) => {
    const handleTableCellChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value as string;
        onTableCellChange && onTableCellChange(value);
    };

    const alignMap = {
        left: styles.Left,
        right: styles.Right,
        center: styles.Center,
    };

    const cellClasses = classNames(
        styles.BasicTableCell,
        alignMap[align],
        Border && styles.Border,
        asHeader && styles.AsHeader,
        isEditable && styles.Editable, // 편집 가능 시 추가 스타일 적용 (옵션)
        width && styles.Fixed
    );

    const cssVariables: React.CSSProperties = {
        '--cell-width': `${width}px`,
        '--header-radius': `${headerRadius}px`,
        '--header-color': `${headerColor}`,
    } as React.CSSProperties;

    return (
        <td className={cellClasses} style={{ ...cssVariables }} {...props}>
            {children}
            {isEditable && <input type="text" defaultValue={value as string} onChange={handleTableCellChange} />}
        </td>
    );
};

export default BasicTableCell;
