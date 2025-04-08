import BasicModalBackdrop from 'headful/BasicModal/BasicModalBackdrop/BasicModalBackdrop';
import BasicModalClose from 'headful/BasicModal/BasicModalClose/BasicModalClose';
import BasicModalTrigger from 'headful/BasicModal/BasicModalTrigger/BasicModalTrigger';
import Modal from 'headless/Modal/Modal';
import React from 'react';
import ArticleModalContent from './ArticleModalContent/ArticleModalContent';
import ArticleModalTemplate from './ArticleModalTemplate/ArticleModalTemplate';

type ArticleModalProps = {
    children: React.ReactNode;
};

const ArticleModal = ({ children }: ArticleModalProps) => {
    return <Modal>{children}</Modal>;
};

export default ArticleModal;

ArticleModal.Trigger = BasicModalTrigger;
ArticleModal.Backdrop = BasicModalBackdrop;
ArticleModal.Close = BasicModalClose;
ArticleModal.Content = ArticleModalContent;
ArticleModal.Template = ArticleModalTemplate;
