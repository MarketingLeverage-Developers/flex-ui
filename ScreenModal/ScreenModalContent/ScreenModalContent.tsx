import Modal from 'headless/Modal/Modal';
import styles from './ScreenModalContent.module.scss';

type ScreenModalContentProps = {
    children: React.ReactNode;
};

const ScreenModalContent = ({ children }: ScreenModalContentProps) => {
    return <Modal.Content className={styles.ScreenModalContent}>{children}</Modal.Content>;
};

export default ScreenModalContent;
