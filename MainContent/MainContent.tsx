import React from 'react';
import styles from './MainContent.module.scss';

type MainContentProps = {
    children: React.ReactNode;
};

const MainContent = ({ children }: MainContentProps) => {
    return <div className={styles.MainContent}>{children}</div>;
};

export default MainContent;
