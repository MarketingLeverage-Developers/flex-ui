import React from 'react';
import styles from './EmptyArea.module.scss';

type EmptyAreaProps = {
    icon: React.ReactNode;
    title: React.ReactNode;
    subTitle?: React.ReactNode;
};

const EmptyArea = ({ icon, title, subTitle }: EmptyAreaProps) => {
    return (
        <Flex
            height={'100%'}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={16}
            className={styles.EmptyArea}
        >
            {icon}
            <Text color="var(--base-color-primary)" fontSize="var(--font-size-lg)" fontWeight="var(--font-weight-bold)">
                {title}
            </Text>

            {subTitle && (
                <Text color="var(--base-color-tertiary)" fontSize="var(--font-size-sm)">
                    {subTitle}
                </Text>
            )}
        </Flex>
    );
};

export default EmptyArea;
