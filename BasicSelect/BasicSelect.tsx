import Dropdown from 'headless/Dropdown/Dropdown';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import BasicSelectItem from './BasicSelectItem/BasicSelectItem';
import BasicSelectContent from './BasicSelectContent/BasicSelectContent';
import BasicSelectTrigger from './BasicSelectTrigger/BasicSelectTrigger';
import styles from './BasicSelect.module.scss';

type BasicSelectProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const BasicSelect = ({ children, defaultValue }: BasicSelectProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Dropdown>
                <Dropdown.Box className={styles['basic-select__box']}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default BasicSelect;

BasicSelect.Item = BasicSelectItem;
BasicSelect.Content = BasicSelectContent;
BasicSelect.Trigger = BasicSelectTrigger;
