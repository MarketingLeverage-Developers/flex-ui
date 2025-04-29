import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';
import React from 'react';

type LabelProps = {
    label: string;
    children: React.ReactNode;
};

const Label = ({ label, children }: LabelProps) => {
    return (
        <Flex flexDirection="column" gap={8}>
            <Text
                fontSize="var(--font-size-sm)"
                fontWeight="var(--font-weight-semi-bold)"
                color="var(--base-color-tertiary)"
            >
                {label}
            </Text>
            {children}
        </Flex>
    );
};

export default Label;
