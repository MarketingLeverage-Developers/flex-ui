import Modal from '@/headless/Modal/Modal';
import Portal from '@/headless/Portal/Portal';
import React from 'react';
import styles from './ImageModal.module.scss';
import { IoIosClose } from 'react-icons/io';
type ImageModalProps = {
    children: [React.ReactNode, React.ReactNode];
};
const ImageModal = ({ children }: ImageModalProps) => {
    const [trigger, content] = children;
    return (
        <Modal>
            <Modal.Trigger>{trigger}</Modal.Trigger>
            <Portal>
                <Modal.Backdrop className={styles.ImageModalBackdrop} />
                <Modal.Content className={styles.ImageModalContent}>
                    <Modal.Close className={styles.Close}>
                        <IoIosClose className={styles.Icon} />
                    </Modal.Close>
                    {content}
                </Modal.Content>
            </Portal>
        </Modal>
    );
};

export default ImageModal;
