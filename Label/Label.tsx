import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import React from 'react';

type LabelProps = {
    label: string;
    required?: boolean;
    children: React.ReactNode;
};

const Label = ({ label, required = false, children }: LabelProps) => {
    return (
        <Flex direction="column" gap={15}>
            <Flex gap={7}>
                <Text size={18} weight={600} color="#111">
                    {label}
                </Text>
                {required && (
                    <Text size={18} weight={600} color="red">
                        *
                    </Text>
                )}
            </Flex>

            {children}
        </Flex>
    );
};

export default Label;
