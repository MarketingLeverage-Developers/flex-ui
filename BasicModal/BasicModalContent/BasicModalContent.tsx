import Modal from 'headless/Modal/Modal';
import styles from './BasicModalContent.module.scss';

type BasicModalContentProps = {
    children: React.ReactNode;
};

const BasicModalContent = ({ children }: BasicModalContentProps) => {
    return <Modal.Content className={styles.BasicModalContent}>{children}</Modal.Content>;
};

export default BasicModalContent;
