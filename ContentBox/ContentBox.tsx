import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';

type ContentBoxProps = React.ComponentProps<typeof Box>;

const ContentBox = ({ children, ...props }: ContentBoxProps) => {
    return (
        <Box {...props} padding={{ y: 30, x: 20 }} backgroundColor="#FFF" radius={5}>
            {children}
        </Box>
    );
};

export default ContentBox;
