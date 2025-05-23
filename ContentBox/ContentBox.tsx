import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';
import styles from './ContentBox.module.scss';

type ContentBoxProps = React.ComponentProps<typeof Box> & {
    title: string;
    rightNode?: React.ReactNode;
};

const ContentBox = ({ children, title, rightNode, ...props }: ContentBoxProps) => {
    return (
        <div className={styles.ContentBox} {...props}>
            <div className={styles.Title}>
                <span>{title}</span>
                <div>{rightNode}</div>
            </div>
            {children}
        </div>
    );
};

export default ContentBox;
