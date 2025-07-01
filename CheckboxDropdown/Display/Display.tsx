import { useCheckboxGroup } from '@/headless/CheckboxGroup/CheckboxGroup';
import React from 'react';

type DisplayProps = React.HTMLAttributes<HTMLDivElement> & {
    render?: (value: string[]) => React.ReactNode;
    placeholder: string;
};

const Display = ({ render, placeholder, ...props }: DisplayProps) => {
    const { checkboxGroupValue } = useCheckboxGroup();
    const isEmpty = !checkboxGroupValue || checkboxGroupValue.length === 0;

    const displayValue = isEmpty ? placeholder : render ? render(checkboxGroupValue) : checkboxGroupValue.join(', ');

    return <div {...props}>{displayValue}</div>;
};

export default Display;
