import Modal from 'headless/Modal/Modal';
import styles from './BasicModalContent.module.scss';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';

type BasicModalContentProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

const BasicModalContent = ({ children, ...props }: BasicModalContentProps) => {
    const combinedStyle = classNames(styles.BasicModalContent, props.className);

    return (
        <Modal.Content {...props} className={combinedStyle}>
            {children}
        </Modal.Content>
    );
};

export default BasicModalContent;
