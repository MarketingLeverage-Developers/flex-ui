import React from 'react';
import styles from './GroupLabel.module.scss';

type GroupLabelProps = {
    text: string;
};

const GroupLabel = ({ text }: GroupLabelProps) => {
    return (
        <div className={styles.GroupLabel}>
            <span className={styles.Text}>{text}</span>
            <div className={styles.Line} />
        </div>
    );
};

export default GroupLabel;
