import Modal from 'headless/Modal/Modal';
import React from 'react';
import ArticleModalContent from './ArticleModalContent/ArticleModalContent';
import ArticleModalTemplate from '../ArticleTemplate/ArticleTemplate';
import BasicModal from 'headful/BasicModal/BasicModal';
import ArticleModalNestedContent from './ArticleModalNestedContent/ArticleModalNestedContent';

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
ArticleModal.NestedContent = ArticleModalNestedContent;
