import React from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    width?: number | string;
    height?: number | string;
    borderRadius?: number | string;
    border?: string;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Image = ({ width, height, borderRadius, border, style, className, ...props }: ImageProps) => {
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === 'number') {
            return `${dim}px`;
        }
        return dim || 'auto';
    };

    const cssVariables: CSSPropertiesWithVars = {
        '--image-width': dimensionToString(width),
        '--image-height': dimensionToString(height),
        '--image-border-radius': typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius || '0',
        '--image-border': border || 'none',
    };

    return <img {...props} className={classNames(styles.image, className)} style={{ ...cssVariables, ...style }} />;
};

export default Image;
