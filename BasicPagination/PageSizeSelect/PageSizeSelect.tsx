import React from 'react';
import { usePagination } from 'headless/Pagination/Pagination';
import PageSizeSelectItem from './PageSizeSelectItem';
import PageSizeSelectContent from './PageSizeSelectContent';
import PageSizeSelectTrigger from './PageSizeSelectTrigger';
import BasicSelect from 'headful/BasicSelect/BasicSelect';

type PageSizeSelectProps = {
    children: React.ReactNode;
    width?: number;
};

const PageSizeSelect = ({ children }: PageSizeSelectProps) => {
    const { paginationValue } = usePagination();

    return <BasicSelect defaultValue={paginationValue.size.toString()}>{children}</BasicSelect>;
};

export default PageSizeSelect;

PageSizeSelect.Item = PageSizeSelectItem;
PageSizeSelect.Content = PageSizeSelectContent;
PageSizeSelect.Trigger = PageSizeSelectTrigger;
