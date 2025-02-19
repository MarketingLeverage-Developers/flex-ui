import React from 'react';
import Main from './Main';
import styles from './CenterLayout.module.scss';

type CenterLayoutProps = {
    children: React.ReactNode;
};

const CenterLayout = ({ children }: CenterLayoutProps) => {
    return <div className={styles['center-layout']}>{children}</div>;
};

export default CenterLayout;

CenterLayout.Main = Main;
