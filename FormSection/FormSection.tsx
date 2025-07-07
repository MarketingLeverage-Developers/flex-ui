import React from 'react';
import styles from './FormSection.module.scss';
import Row from './Row';
import Separator from './Separator';
import Content from './Content';
type FormSectionProps = {
    children: React.ReactNode;
};
const FormSection = ({ children }: FormSectionProps) => {
    return <div className={styles.FormSection}>{children}</div>;
};

export default FormSection;

FormSection.Content = Content;
FormSection.Row = Row;
FormSection.Separator = Separator;
