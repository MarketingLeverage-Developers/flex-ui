import styles from './ArticleModalContent.module.scss';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import BasicModal from 'headful/BasicModal/BasicModal';

type ArticleModalContentProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

const ArticleModalContent = ({ children, ...props }: ArticleModalContentProps) => {
    const combinedStyle = classNames(styles.ArticleModalContent, props.className);

    return (
        <BasicModal.Content {...props} className={combinedStyle}>
            {children}
        </BasicModal.Content>
    );
};

export default ArticleModalContent;
