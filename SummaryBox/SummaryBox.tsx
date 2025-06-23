import React from 'react';
import styles from './SummaryBox.module.scss';
import Title from './Title';
import LineForm from './LineForm';
import AreaForm from './AreaForm';
import Row from './Row';
import Col from './Col';

type SummaryBoxProps = {
    children: React.ReactNode;
};

const SummaryBox = ({ children }: SummaryBoxProps) => {
    return <div className={styles.SummaryBox}>{children}</div>;
};

export default SummaryBox;

SummaryBox.Title = Title;
SummaryBox.LineForm = LineForm;
SummaryBox.AreaForm = AreaForm;
SummaryBox.Row = Row;
SummaryBox.Col = Col;
