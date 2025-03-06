import React from 'react';
import styles from './Page.module.scss';
import Content from './Content/Content';
import Aside from './Aside/Aside';

type PageProps = {
    children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
    return <div className={styles.Page}>{children}</div>;
};

export default Page;

Page.Content = Content;
Page.Aside = Aside;
