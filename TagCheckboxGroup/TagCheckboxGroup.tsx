import CheckboxGroup from '@/headless/CheckboxGroup/CheckboxGroup';
import React from 'react';
import Item from './Item/Item';
import Category from './Category/Category';

type TagCheckboxProps = React.ComponentProps<typeof CheckboxGroup>;

const TagCheckboxGroup = (props: TagCheckboxProps) => {
    return <CheckboxGroup {...props}>{props.children}</CheckboxGroup>;
};

export default TagCheckboxGroup;

TagCheckboxGroup.Item = Item;
TagCheckboxGroup.Category = Category;
