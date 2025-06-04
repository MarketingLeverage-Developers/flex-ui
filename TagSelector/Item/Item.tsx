import CheckboxGroup, { useCheckboxGroup } from '@/headless/CheckboxGroup/CheckboxGroup';
import classNames from 'classnames';
import React from 'react';
import styles from './Item.module.scss';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import TagCheckboxGroup from '../TagSelector';

type ItemProps = React.ComponentProps<typeof CheckboxGroup.Item> & {
    text: string;
};

const Item = ({ text, ...props }: ItemProps) => {
    const { isChecked, toggleCheckboxGroupValue } = useCheckboxGroup();

    // const className = classNames(styles.Item, {

    // });

    console.log('isChecked', isChecked(props.value));

    const CheckboxClassName = classNames(styles.Checkbox, {
        [styles.Active]: isChecked(props.value),
    });
    const TextClassName = classNames(styles.Text, {
        [styles.Active]: isChecked(props.value),
    });

    const cssVariables: CSSPropertiesWithVars = {};

    return (
        <CheckboxGroup.Item {...props} className={styles.Item} style={{ ...props, ...cssVariables }}>
            <div className={CheckboxClassName} />
            <div className={TextClassName}>
                <span>{text}</span>
            </div>
        </CheckboxGroup.Item>
    );
};

export default Item;
