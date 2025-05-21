import React from 'react';
import styles from './Header.module.scss';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import HeaderContent from './HeaderContent/HeaderContent';

type HeaderProps = {
    children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <HeaderContent></HeaderContent>
        </header>
    );
};

export default Header;
