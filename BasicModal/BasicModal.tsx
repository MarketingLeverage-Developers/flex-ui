import Modal from 'headless/Modal/Modal';
import React from 'react';
import BasicModalBackdrop from './BasicModalBackdrop/BasicModalBackdrop';
import BasicModalClose from './BasicModalClose/BasicModalClose';
import BasicModalContent from './BasicModalContent/BasicModalContent';
import BasicModalTrigger from './BasicModalTrigger/BasicModalTrigger';

type BasicModalProps = React.ComponentProps<typeof Modal>;

const BasicModal = ({ ...props }: BasicModalProps) => {
    return <Modal {...props} />;
};

export default BasicModal;

BasicModal.Trigger = BasicModalTrigger;
BasicModal.Backdrop = BasicModalBackdrop;
BasicModal.Close = BasicModalClose;
BasicModal.Content = BasicModalContent;
