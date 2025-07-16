import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';
import styles from './ContentBox.module.scss';
import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString } from '@/ui-kit/src/utils';
import classNames from 'classnames';

type ContentBoxProps = React.ComponentProps<typeof Box> & {
    title?: React.ReactNode;
    titleBorder?: boolean;
    header?: React.ReactNode;
    rightNode?: React.ReactNode;
    width?: BoxSize | string;
    height?: BoxSize | string;
    s?: boolean;
};

const ContentBox = ({
    children,
    title,
    titleBorder,
    header,
    rightNode,
    s,
    width,
    height = '100%',
    ...props
}: ContentBoxProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': s ? dimensionToString(width) : dimensionToVariable(width),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
        '--padding': s ? spacingToString(props.padding) : spacingToSpace(props.padding),
    };

    const TitleClassName = classNames(styles.Title, {
        [styles.Border]: titleBorder,
    });

    return (
        <div className={styles.ContentBox} {...props} style={{ ...props.style, ...cssVariables }}>
            {(title || header || rightNode) && (
                <div className={TitleClassName}>
                    {title && <span>{title}</span>}
                    {header && <div>{header}</div>}
                    <div>{rightNode}</div>
                </div>
            )}

            {children}
        </div>
    );
};

export default ContentBox;
