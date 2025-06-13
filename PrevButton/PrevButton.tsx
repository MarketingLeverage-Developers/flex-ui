import Prev from '@/headless/Pagination/Prev';
import classNames from 'classnames';
import React from 'react';
import styles from './PrevButton.module.scss';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';

type PrevButtonProps = React.ComponentProps<typeof Prev> & {
    size?: ContentSize;
    radius?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
};

const PrevButton = ({
    size = 'md',
    radius = 0,
    backgroundColor = 'inherit',
    borderColor,
    color,
    ...props
}: PrevButtonProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--radius': `${radius}px`,
        '--borderColor': borderColor,
        '--background-color': backgroundColor,
    };

    const className = classNames(styles.PrevButton, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });
    return <Prev {...props} style={{ ...cssVariables, ...props.style }} className={className} />;
};

export default PrevButton;
