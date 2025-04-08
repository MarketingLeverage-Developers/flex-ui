import Modal from 'headless/Modal/Modal';
import React from 'react';
import ArticleModalContent from './ArticleModalContent/ArticleModalContent';
import ArticleModalTemplate from './ArticleModalTemplate/ArticleModalTemplate';
import BasicModal from 'headful/BasicModal/BasicModal';

type ArticleModalProps = {
    children: React.ReactNode;
};

const ArticleModal = ({ children }: ArticleModalProps) => {
    return <Modal>{children}</Modal>;
};

export default ArticleModal;

ArticleModal.Trigger = BasicModal.Trigger;
ArticleModal.Backdrop = BasicModal.Backdrop;
ArticleModal.Close = BasicModal.Close;
ArticleModal.Content = ArticleModalContent;
ArticleModal.Template = ArticleModalTemplate;
