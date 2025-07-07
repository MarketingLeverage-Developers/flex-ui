import React from 'react';
import styles from './A4.module.scss';

type A4Props = {
    children: React.ReactNode;
};

const A4 = ({ children }: A4Props) => {
    return (
        <div id={'report-slide'} className={styles.A4Wrapper}>
            <div className={styles.A4}>{children}</div>
        </div>
    );
};

export default A4;
