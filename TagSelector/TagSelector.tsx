import CheckboxGroup from '@/headless/CheckboxGroup/CheckboxGroup';
import React from 'react';
import Item from './Item/Item';
import Category from './Category/Category';

type TagCheckboxProps = React.ComponentProps<typeof CheckboxGroup>;

const TagSelector = (props: TagCheckboxProps) => {
    return <CheckboxGroup {...props}>{props.children}</CheckboxGroup>;
};

export default TagSelector;

TagSelector.Item = Item;
TagSelector.Category = Category;
