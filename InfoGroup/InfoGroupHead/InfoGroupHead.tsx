import React from 'react';
import styles from './InfoGroupHead.module.scss';
import Flex from 'headful/Flex/Flex';
import Block from 'headful/Block/Block';
import Text from 'headful/Text/Text';

type InfoGroupHeadProps = {
    label: React.ReactNode;
    rightNode?: React.ReactNode;
};
const InfoGroupHead = ({ label, rightNode }: InfoGroupHeadProps) => {
    return (
        <Flex className={styles.InfoGroupHead}>
            <Flex alignItems="center">
                <Block>
                    <Text
                        fontSize="var(--font-size-xs)"
                        fontWeight="var(--font-weight-bold)"
                        color="var(--base-color-tertiary)"
                    >
                        {label}
                    </Text>
                </Block>
            </Flex>
            <Flex>{rightNode}</Flex>
        </Flex>
    );
};

export default InfoGroupHead;
