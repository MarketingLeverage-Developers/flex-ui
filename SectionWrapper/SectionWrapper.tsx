import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';
import React from 'react';

type SectionWrapperProps = {
    children: React.ReactNode;
    labelText: string;
    fontSize?: string;
};

const SectionWrapper = ({ children, labelText, fontSize }: SectionWrapperProps) => {
    return (
        <Flex flexDirection="column" gap={10}>
            <Text fontSize={fontSize ?? 'var(--font-size-lg)'} fontWeight="bold">
                {labelText}
            </Text>
            {children}
        </Flex>
    );
};

export default SectionWrapper;
