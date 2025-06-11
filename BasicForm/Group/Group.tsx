import React from 'react';
import styles from './Group.module.scss';

type GroupProps = {
    children: React.ReactNode;
};

const Group = ({ children }: GroupProps) => {
    return <div className={styles.Group}>{children}</div>;
};

export default Group;
