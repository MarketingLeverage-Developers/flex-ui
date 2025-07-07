import React from 'react';
import styles from './ReportTitle.module.scss';
import Logo from '@/assets/images/logo.svg';

type ReportTitleProps = {
    title: string;
};

const ReportTitle = ({ title }: ReportTitleProps) => {
    return (
        <div className={styles.ReportTitle}>
            <img src={Logo} alt="로고" />
            <span>{title}</span>
        </div>
    );
};

export default ReportTitle;
