import React from 'react';
import styles from './Main.module.scss';
import Content from './Content/Content';
import Aside from './Aside/Aside';

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return <main className={styles.main}>{children}</main>;
};

export default Main;

Main.Content = Content;
Main.Aside = Aside;
