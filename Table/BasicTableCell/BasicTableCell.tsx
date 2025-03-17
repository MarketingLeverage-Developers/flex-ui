import React from 'react';
import classNames from 'classnames';
import styles from './BasicTableCell.module.scss';

type BasicTableCellProps = {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    asHeader?: boolean;
    isEditable?: boolean; // 편집 가능 여부 prop
    width?: number;
};

const BasicTableCell = ({ children, align = 'center', asHeader, isEditable = false, width }: BasicTableCellProps) => {
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
        <td className={cellClasses} style={{ ...cssVariables }} contentEditable={isEditable}>
            {children}
        </td>
    );
};

export default BasicTableCell;
