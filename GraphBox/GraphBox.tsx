import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';
import styles from './GraphBox.module.scss';

type GraphBoxProps = React.ComponentProps<typeof Box> & {
    title?: string;
    rightNode?: React.ReactNode;
};

const GraphBox = ({ children, title, rightNode, ...props }: GraphBoxProps) => {
    return (
        <div className={styles.GraphBox} {...props}>
            <div className={styles.Title}>
                <span>{title}</span>
                <div>{rightNode}</div>
            </div>

            <div className={styles.Children}>{children}</div>
        </div>
    );
};

export default GraphBox;
