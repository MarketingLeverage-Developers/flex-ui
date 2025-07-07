import React from 'react';
import styles from './FormSection.module.scss';
type ContentProps = {
    children: React.ReactNode;
    title: string;
};
const Content = ({ children, title }: ContentProps) => {
    return (
        <div className={styles.Content}>
            <div className={styles.Title}>{title}</div>
            {children}
        </div>
    );
};

export default Content;
