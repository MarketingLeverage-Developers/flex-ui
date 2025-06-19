import React from 'react';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';

type BasicLabelProps = {
    label: string;
    required?: boolean;
    children: React.ReactNode;
    rightNode?: React.ReactNode;
};
const BasicLabel = ({ label, required = false, children, rightNode }: BasicLabelProps) => {
    return (
        <Flex direction="column" gap={15}>
            <Flex justify="space-between" align="center">
                <Text size={18} weight={600} color="#111">
                    {label}
                    {required && <Text color="red">*</Text>}
                </Text>
                {rightNode}
            </Flex>

            {children}
        </Flex>
    );
};

export default BasicLabel;
