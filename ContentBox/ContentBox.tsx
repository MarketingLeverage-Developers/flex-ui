import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';
import styles from './ContentBox.module.scss';
import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString } from '@/ui-kit/src/utils';

type ContentBoxProps = React.ComponentProps<typeof Box> & {
    title?: string;
    rightNode?: React.ReactNode;
    width?: BoxSize | string;
    height?: BoxSize | string;
    s?: boolean;
};

const ContentBox = ({ children, title, rightNode, s, width, height, ...props }: ContentBoxProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': s ? dimensionToString(width) : dimensionToVariable(width),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
        '--padding': s ? spacingToString(props.padding) : spacingToSpace(props.padding),
    };

    return (
        <div className={styles.ContentBox} {...props} style={{ ...props.style, ...cssVariables }}>
            {(title || rightNode) && (
                <div className={styles.Title}>
                    <span>{title}</span>
                    <div>{rightNode}</div>
                </div>
            )}

            {children}
        </div>
    );
};

export default ContentBox;
