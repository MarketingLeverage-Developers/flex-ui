import Modal from 'headless/Modal/Modal';
import React from 'react';
import ScreenModalBackdrop from './ScreenModalBackdrop/ScreenModalBackdrop';
import ScreenModalClose from './ScreenModalClose/ScreenModalClose';
import ScreenModalContent from './ScreenModalContent/ScreenModalContent';
import ScreenModalTrigger from './ScreenModalTrigger/ScreenModalTrigger';

type ScreenModalProps = {
    children: React.ReactNode;
};

const ScreenModal = ({ children }: ScreenModalProps) => {
    return <Modal>{children}</Modal>;
};

export default ScreenModal;

ScreenModal.Trigger = ScreenModalTrigger;
ScreenModal.Backdrop = ScreenModalBackdrop;
ScreenModal.Close = ScreenModalClose;
ScreenModal.Content = ScreenModalContent;
