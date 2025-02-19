import BasicSelect from 'headful/BasicSelect/BasicSelect';
import BasicSelectContent from 'headful/BasicSelect/BasicSelectContent';
import React from 'react';

type PageSizeSelectContentProps = {
    children: React.ReactNode;
};

const PageSizeSelectContent = ({ children }: PageSizeSelectContentProps) => {
    return <BasicSelect.Content>{children}</BasicSelect.Content>;
};

export default PageSizeSelectContent;
