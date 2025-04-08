import Modal from 'headless/Modal/Modal';
import styles from './BasicModalClose.module.scss';
import { HiOutlineXMark } from 'react-icons/hi2';

const BasicModalClose = () => {
    return (
        <Modal.Close className={styles.BasicModalClose}>
            <HiOutlineXMark color="var(--base-color-tertiary)" />
        </Modal.Close>
    );
};

export default BasicModalClose;
