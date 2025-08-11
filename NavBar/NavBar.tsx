import React from 'react';
import styles from './NavBar.module.scss';
import Item from './components/Item/Item';

type NavBarProps = {
    children: React.ReactNode;
};

const NavBar = ({ children }: NavBarProps) => {
    return <div className={styles.NavBar}>{children}</div>;
};

export default NavBar;

NavBar.Item = Item;
