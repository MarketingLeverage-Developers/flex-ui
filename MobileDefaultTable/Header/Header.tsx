import React from 'react';
import styles from './Header.module.scss';

type HeaderProps = {
    children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return <thead className={styles.Header}>{children}</thead>;
};

export default Header;
