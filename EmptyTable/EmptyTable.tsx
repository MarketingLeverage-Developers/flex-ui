import Flex from 'headful/Flex/Flex';
import styles from './EmptyTable.module.scss';
import { PiWarningCircle } from 'react-icons/pi';

type EmptyAreaProps = {
    text: string;
};

const EmptyTable = ({ text }: EmptyAreaProps) => {
    return (
        <Flex justifyContent="center" alignItems="center" className={styles.EmptyTable}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
                <PiWarningCircle size={24} />
                {text}
            </Flex>
        </Flex>
    );
};

export default EmptyTable;
