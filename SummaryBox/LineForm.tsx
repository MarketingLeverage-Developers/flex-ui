import React from 'react';
import styles from './SummaryBox.module.scss';

type LineFormProps = {
    label: string;
    children: React.ReactNode;
};

const LineForm = ({ label, children }: LineFormProps) => {
    return (
        <div className={styles.LineForm}>
            <span className={styles.Label}>{label}</span>
            <div className={styles.Children}>{children}</div>
        </div>
    );
};

export default LineForm;
