import React from 'react';
import styles from './EmptyArea.module.scss';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Text from '@/ui-kit/src/components/contents/Text/Text';

type EmptyAreaProps = {
    icon: React.ReactNode;
    title: React.ReactNode;
    subTitle?: React.ReactNode;
};

const EmptyArea = ({ icon, title, subTitle }: EmptyAreaProps) => {
    return (
        <Flex height={'100%'} direction="column" justify="center" align="center" gap={15} className={styles.EmptyArea}>
            {icon}
            <Text color="#474747" size={20} weight={500}>
                {title}
            </Text>

            {subTitle && (
                <Text color="#474747" size={16}>
                    {subTitle}
                </Text>
            )}
        </Flex>
    );
};

export default EmptyArea;
