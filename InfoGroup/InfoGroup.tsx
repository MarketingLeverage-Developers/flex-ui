import React from 'react';
import InfoGroupItem from './InfoGroupItem/InfoGroupItem';
import InfoGroupHead from './InfoGroupHead/InfoGroupHead';
import styles from './InfoGroup.module.scss';

type InfoGroupProps = {
    children: React.ReactNode;
};

const InfoGroup = ({ children }: InfoGroupProps) => {
    return <div className={styles.InfoGroup}>{children}</div>;
};

export default InfoGroup;

InfoGroup.Item = InfoGroupItem;
InfoGroup.Head = InfoGroupHead;
