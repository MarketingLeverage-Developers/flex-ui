import Modal from 'headless/Modal/Modal';
import React from 'react';
import BasicModalBackdrop from './BasicModalBackdrop/BasicModalBackdrop';
import BasicModalClose from './BasicModalClose/BasicModalClose';
import BasicModalContent from './BasicModalContent/BasicModalContent';
import BasicModalTrigger from './BasicModalTrigger/BasicModalTrigger';

type BasicModalProps = {
    children: React.ReactNode;
};

const BasicModal = ({ children }: BasicModalProps) => {
    return <Modal>{children}</Modal>;
};

export default BasicModal;

BasicModal.Trigger = BasicModalTrigger;
BasicModal.Backdrop = BasicModalBackdrop;
BasicModal.Close = BasicModalClose;
BasicModal.Content = BasicModalContent;
