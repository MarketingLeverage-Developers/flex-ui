import React from 'react';
import styles from './InfoGroupHead.module.scss';

type InfoGroupHeadProps = {
    label: React.ReactNode;
    rightNode?: React.ReactNode;
};
const InfoGroupHead = ({ label, rightNode }: InfoGroupHeadProps) => {
    return (
        <div className={styles.InfoGroupHead}>
            <div className={styles.Wrapper}>
                <div className={styles.Label}>{label}</div>
            </div>
            <div className={styles.RightNode}>{rightNode}</div>
        </div>
    );
};

export default InfoGroupHead;
