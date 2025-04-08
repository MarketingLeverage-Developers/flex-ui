import styles from './ArticleModalContent.module.scss';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import BasicModal from 'headful/BasicModal/BasicModal';
import BasicModalContent from 'headful/BasicModal/BasicModalContent/BasicModalContent';

type ArticleModalContentProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

const ArticleModalContent = ({ children, ...props }: ArticleModalContentProps) => {
    const combinedStyle = classNames(styles.ArticleModalContent, props.style);

    return (
        <BasicModal.Content {...props} className={combinedStyle}>
            {children}
        </BasicModal.Content>
    );
};

export default ArticleModalContent;
