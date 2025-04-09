import React from 'react';
import styles from './SectionWrapper.module.scss';

type SectionWrapperProps = {
    children: React.ReactNode;
    labelText: string;
    fontSize?: string;
};

const SectionWrapper = ({ children, labelText }: SectionWrapperProps) => {
    return (
        <div className={styles.SectionWrapper}>
            <div className={styles.Text}>{labelText}</div>
            {children}
        </div>
    );
};

export default SectionWrapper;
