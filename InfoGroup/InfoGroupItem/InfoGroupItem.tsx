import Block from 'headful/Block/Block';
import styles from './InfoGroupItem.module.scss';
import { IconType } from 'react-icons';
import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';

type InfoGroupItemProps = {
    icon: IconType;
    label: string;
    value: string;
};
const InfoGroupItem = ({ icon: Icon, label, value }: InfoGroupItemProps) => {
    return (
        <Flex className={styles.InfoGroupItem}>
            <Flex alignItems="center">
                <Icon size={16} color="var(--base-color-tertiary)" />
                <Block width={130} margin={{ left: 20 }}>
                    <Text fontSize="var(--font-size-sm)" color="var(--base-color-tertiary)">
                        {label}
                    </Text>
                </Block>
            </Flex>
            <Flex>
                <Text fontSize="var(--font-size-sm)" color="var(--base-color-tertiary)">
                    {value}
                </Text>
            </Flex>
        </Flex>
    );
};

export default InfoGroupItem;
