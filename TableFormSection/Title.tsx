import React from 'react';
import styles from './TableFormSection.module.scss';

const Title = ({ title }: { title: string }) => {
    return <div className={styles.Title}>{title}</div>;
};

export default Title;
