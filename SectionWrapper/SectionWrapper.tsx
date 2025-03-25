import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';
import React from 'react';

type SectionWrapperProps = {
    children: React.ReactNode;
    labelText: string;
};

const SectionWrapper = ({ children, labelText }: SectionWrapperProps) => {
    return (
        <Flex flexDirection="column" gap={10}>
            <Text fontSize="var(--font-size-lg)" fontWeight="bold">
                {labelText}
            </Text>
            {children}
        </Flex>
    );
};

export default SectionWrapper;
