import React, { HTMLAttributes } from 'react';
import styles from './CarTag.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';

type CarTagProps = HTMLAttributes<HTMLDivElement> & {
    size?: ContentSize;
    color?: HexColor;
    full?: boolean;
};

const CarTag = ({ size, color, full, ...props }: CarTagProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };
    const combinedStyles = classNames(styles.CarTag, props.className, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });
    return <div {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default CarTag;
