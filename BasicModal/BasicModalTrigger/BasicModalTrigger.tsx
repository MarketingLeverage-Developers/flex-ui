import Modal from 'headless/Modal/Modal';
import React from 'react';

type BasicModalTriggerProps = {
    children: React.ReactNode;
};

const BasicModalTrigger = ({ children }: BasicModalTriggerProps) => {
    return <Modal.Trigger>{children}</Modal.Trigger>;
};

export default BasicModalTrigger;
