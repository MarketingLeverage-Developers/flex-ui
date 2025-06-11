import React from 'react';
import styles from './BasicForm.module.scss';
import GroupLabel from './GroupLabel/GroupLabel';
import Label from './Label/Label';
import Group from './Group/Group';

type BasicFormProps = {
    children: React.ReactNode;
};

const BasicForm = ({ children }: BasicFormProps) => {
    return <div className={styles.BasicForm}>{children}</div>;
};

export default BasicForm;

BasicForm.GroupLabel = GroupLabel;
BasicForm.Group = Group;
BasicForm.Label = Label;
