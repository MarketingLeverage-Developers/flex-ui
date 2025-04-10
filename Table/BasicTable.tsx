import React, { useEffect, useRef } from 'react';
import styles from './BasicTable.module.scss';
import BasicTableHeader from './BasicTableHeader/BasicTableHeader';
import BasicTableRow from './BasicTableRow/BasicTableRow';
import BasicTableCell from './BasicTableCell/BasicTableCell';
import BasicTableBody from './BasicTableBody/BasicTableBody';

type BasicTableProps = {
    children: React.ReactNode;
};

const BasicTable = ({ children }: BasicTableProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapperEl = wrapperRef.current;
        if (!wrapperEl) return;

        const handleWheel = (e: WheelEvent) => {
            // 세로 스크롤 값을 가로 스크롤로 전환합니다.
            if (e.deltaY !== 0) {
                e.preventDefault();
                wrapperEl.scrollLeft += e.deltaY;
            }
        };

        // passive 옵션을 false로 설정해야 e.preventDefault()가 작동합니다.
        wrapperEl.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            wrapperEl.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div ref={wrapperRef} className={styles['basic-table-wrapper']}>
            <table className={styles['basic-table']}>{children}</table>
        </div>
    );
};

export default BasicTable;

BasicTable.Header = BasicTableHeader;
BasicTable.Row = BasicTableRow;
BasicTable.Cell = BasicTableCell;
BasicTable.Body = BasicTableBody;
