import React from 'react';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import styles from './MenuItem.module.scss';
import classNames from 'classnames';

type MenuItemProps = {
    // label: string;
    // value: string;
    // icon?: IconType;
    // onItemClick: (value: SelectGroupValue) => void;
} & React.ComponentProps<typeof SelectGroup.Item>;

const MenuItem = ({ value, onSelectGroupItemClick }: MenuItemProps) => {
    const { selectGroupValue } = useSelectGroup();

    // const displayLabel = typeof value === 'string' ? value : value.label;
    const combinedClassName = classNames(styles.MenuItem, {
        [styles.Active]: (selectGroupValue as { label: string; value: any }).value.startsWith(
            (value as { label: string; value: any }).value
        ),
    });

    return (
        <SelectGroup.Item className={combinedClassName} value={value} onSelectGroupItemClick={onSelectGroupItemClick}>
            {/* <Menu.IconText icon={icon} label={label} /> */}
        </SelectGroup.Item>
    );
};

export default MenuItem;
