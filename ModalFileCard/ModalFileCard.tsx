import styles from './ModalFileCard.module.scss';
import { IoMdCloseCircle } from 'react-icons/io';
import { LiaDownloadSolid } from 'react-icons/lia';
type ModalFileCardProps = {
    text: string;
    onDeleteButtonClick?: () => void;
    onDownloadButtonClick?: () => void;
};

const ModalFileCard = ({ text, onDeleteButtonClick, onDownloadButtonClick }: ModalFileCardProps) => {
    return (
        <div className={styles.ModalFileCard}>
            <div className={styles.Text}>{text}</div>
            {onDownloadButtonClick && (
                <button className={styles.Download} onClick={onDownloadButtonClick}>
                    <LiaDownloadSolid color="#474747" />
                </button>
            )}
            {onDeleteButtonClick && (
                <button className={styles.Delete} onClick={onDeleteButtonClick}>
                    <IoMdCloseCircle color="#474747" />
                </button>
            )}
        </div>
    );
};

export default ModalFileCard;
