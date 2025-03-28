import Modal from 'headless/Modal/Modal';
import React from 'react';

type ScreenModalTriggerProps = {
    children: React.ReactNode;
};

const ScreenModalTrigger = ({ children }: ScreenModalTriggerProps) => {
    return <Modal.Trigger>{children}</Modal.Trigger>;
};

export default ScreenModalTrigger;
