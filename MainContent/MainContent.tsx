import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';

type MainContentProps = {
    children: React.ReactNode;
};

const MainContent = ({ children }: MainContentProps) => {
    return (
        <Box padding={30} backgroundColor="#fafafa" height="100%" style={{ overflow: 'auto' }}>
            {children}
        </Box>
    );
};

export default MainContent;
