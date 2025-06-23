import React from 'react';
import styles from './SummaryBox.module.scss';

type AreaFormProps = {
    label: string;
    children: React.ReactNode;
};

const AreaForm = ({ label, children }: AreaFormProps) => {
    return (
        <div className={styles.AreaForm}>
            <span className={styles.Label}>{label}</span>
            <div className={styles.Children}>{children}</div>
        </div>
    );
};

export default AreaForm;
