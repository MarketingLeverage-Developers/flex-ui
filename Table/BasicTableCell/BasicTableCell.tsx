import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';
import styles from './BasicTableCell.module.scss';

type BasicTableCellProps = {
    children: React.ReactNode | string;
    align?: 'left' | 'center' | 'right';
    asHeader?: boolean;
    isEditable?: boolean; // 편집 가능 여부 prop
    width?: number;
    onTableCellChange?: (value: string) => void;
};

const BasicTableCell = ({
    children,
    align = 'center',
    asHeader,
    isEditable = false,
    width,
    onTableCellChange,
}: BasicTableCellProps) => {
    const handleTableCellChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value as string;
        onTableCellChange && onTableCellChange(value);
    };

    const cellClasses = classNames(
        styles.BasicTableCell,
        align === 'center' ? styles.Left : styles.Right,
        asHeader && styles.AsHeader,
        isEditable && styles.Editable, // 편집 가능 시 추가 스타일 적용 (옵션)
        width && styles.Fixed
    );

    const cssVariables: React.CSSProperties = {
        '--cell-width': `${width}px`,
    } as React.CSSProperties;

    return (
        <td className={cellClasses} style={{ ...cssVariables }}>
            {isEditable ? (
                <input type="text" defaultValue={children as string} onChange={handleTableCellChange} />
            ) : (
                children
            )}
        </td>
    );
};

export default BasicTableCell;
