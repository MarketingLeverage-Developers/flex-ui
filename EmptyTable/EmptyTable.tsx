import styles from './EmptyTable.module.scss';
import { PiWarningCircle } from 'react-icons/pi';

type EmptyAreaProps = {
    text: string;
};

const EmptyTable = ({ text }: EmptyAreaProps) => {
    return (
        <div className={styles.EmptyTable}>
            <div className={styles.Wrapper}>
                <PiWarningCircle size={24} />
                {text}
            </div>
        </div>
    );
};

export default EmptyTable;
