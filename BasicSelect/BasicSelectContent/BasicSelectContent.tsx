import React from 'react';
import Dropdown from 'headless/Dropdown/Dropdown';
import styles from './BasicSelectContent.module.scss';

type BasicSelectContentProps = {
    children: React.ReactNode;
};

const BasicSelectContent = ({ children }: BasicSelectContentProps) => {
    return <Dropdown.Content className={styles['basic-select__content']}>{children}</Dropdown.Content>;
};

export default BasicSelectContent;
