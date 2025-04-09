import styles from './InfoGroupItem.module.scss';
import { IconType } from 'react-icons';

type InfoGroupItemProps = {
    icon: IconType;
    label: string;
    value: string;
};
const InfoGroupItem = ({ icon: Icon, label, value }: InfoGroupItemProps) => {
    return (
        <div className={styles.InfoGroupItem}>
            <div className={styles.Left}>
                <Icon size={16} color="var(--base-color-tertiary)" />
                <div className={styles.LabelWrapper}>
                    <div className={styles.Label}>{label}</div>
                </div>
            </div>
            <div className={styles.Right}>
                <span>{value}</span>
            </div>
        </div>
    );
};

export default InfoGroupItem;
