import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import styles from './Layout.module.scss';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return <div className={styles.layout}>{children}</div>;
};

export default Layout;

Layout.Header = Header;
Layout.Sidebar = Sidebar;
Layout.Main = Main;
