import Box from '@/ui-kit/components/layouts/Box/Box';
import React from 'react';

type ContentBoxProps = {
    children: React.ReactNode;
};

const ContentBox = ({ children }: ContentBoxProps) => {
    return (
        <Box padding={20} backgroundColor="#FFF" radius={5}>
            {children}
        </Box>
    );
};

export default ContentBox;
