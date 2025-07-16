import React from 'react';
import styles from './Content.module.scss';
import { dimensionToString } from '@/ui-kit/src/utils';

type ContentProps = {
    children?: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: number | string;
    height?: number | string;
};

const Content = ({ width, children, height = 20, align = 'left' }: ContentProps) => {
    const cssVariables: React.CSSProperties = {
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
        '--align': align,
    } as React.CSSProperties;

    return (
        <div className={styles.Content} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Content;
