import BasicInput from 'headful/BasicInput/BasicInput';
import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';
import React from 'react';

type FormInputProps = React.ComponentProps<typeof BasicInput> & {
    label: string;
};

const FormInput = ({ label, ...props }: FormInputProps) => {
    return (
        <Flex flexDirection="column" gap={8}>
            <Text
                fontSize="var(--font-size-sm)"
                fontWeight="var(--font-weight-semi-bold)"
                color="var(--base-color-tertiary)"
            >
                {label}
            </Text>
            <BasicInput {...props} />
        </Flex>
    );
};

export default FormInput;
