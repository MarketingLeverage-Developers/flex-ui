import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';
import styles from './GraphBox.module.scss';
import classNames from 'classnames';

type GraphBoxProps = React.ComponentProps<typeof Box> & {
    title?: string;
    rightNode?: React.ReactNode;
    sub?: boolean;
};

const GraphBox = ({ children, title, sub, rightNode, ...props }: GraphBoxProps) => {
    const className = classNames(styles.GraphBox, {
        [styles.Sub]: sub,
    });

    return (
        <div className={className} {...props}>
            <div className={styles.Title}>
                <span>{title}</span>
                <div>{rightNode}</div>
            </div>

            <div className={styles.Children}>{children}</div>
        </div>
    );
};

export default GraphBox;
