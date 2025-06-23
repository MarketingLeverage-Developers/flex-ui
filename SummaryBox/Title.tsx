import React from 'react';
import styles from './SummaryBox.module.scss';

type TitleProps = {
    text: string;
};

const Title = ({ text }: TitleProps) => {
    return <div className={styles.Title}>{text}</div>;
};

export default Title;
