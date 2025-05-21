import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';
import styles from './ContentBox.module.scss';

type ContentBoxProps = React.ComponentProps<typeof Box> & {
    title: string;
};

const ContentBox = ({ children, title, ...props }: ContentBoxProps) => {
    return (
        <div className={styles.ContentBox} {...props}>
            <div className={styles.Title}>{title}</div>
            {children}
        </div>
    );
};

export default ContentBox;
