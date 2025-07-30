import Box from '@/ui-kit/src/components/layouts/Box/Box';
import React from 'react';
import styles from './MobileContentBox.module.scss';
import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';
import classNames from 'classnames';

type MobileContentBoxProps = React.ComponentProps<typeof Box> & {
    title?: React.ReactNode;
    titleAlign?: 'space-between' | 'center' | 'end' | 'start';
    titleBorder?: boolean;
    header?: React.ReactNode;
    rightNode?: React.ReactNode;
    width?: BoxSize | string;
    height?: BoxSize | string;
    fontSize?: number | string;
    s?: boolean;
};

const MobileContentBox = ({
    children,
    title,
    titleAlign = 'space-between',
    titleBorder,
    header,
    rightNode,
    s,
    fontSize = 17,
    width,
    height = '100%',
    ...props
}: MobileContentBoxProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
        '--padding': spacingToString(props.padding),
        '--font-size': dimensionToString(fontSize),
        '--title-align': titleAlign,
    };

    const TitleClassName = classNames(styles.Title, {
        [styles.Border]: titleBorder,
    });

    return (
        <div className={styles.MobileContentBox} {...props} style={{ ...props.style, ...cssVariables }}>
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

export default MobileContentBox;
