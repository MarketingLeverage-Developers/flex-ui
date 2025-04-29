import styles from './ArticleModalNestedContent.module.scss';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import BasicModal from 'headful/BasicModal/BasicModal';

type ArticleModalNestedContentProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

const ArticleModalNestedContent = ({ children, ...props }: ArticleModalNestedContentProps) => {
    const combinedStyle = classNames(styles.ArticleModalNestedContent, props.style);

    return (
        <BasicModal.Content {...props} className={combinedStyle}>
            {children}
        </BasicModal.Content>
    );
};

export default ArticleModalNestedContent;
