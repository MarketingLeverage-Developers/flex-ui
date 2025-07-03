import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    value: number; // 0 ~ 100
}

const ProgressBar = ({ value }: ProgressBarProps) => {
    return (
        <div className={styles.ProgressBar}>
            <div className={styles.Bar} style={{ width: `${value}%` }} />
            <span className={styles.Label}>{value}%</span>
        </div>
    );
};

export default ProgressBar;
