import React from 'react';
import styles from './LineItem.module.scss';

type LineItemProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const LineItem = ({ children, className, ...rest }: LineItemProps) => {
    return (
        <div className={styles.LineItemWrapper}>
            <div className={`${styles.LineItem} ${className ?? ''}`} {...rest}>
                {children}
            </div>
        </div>
    );
};

export default LineItem;
