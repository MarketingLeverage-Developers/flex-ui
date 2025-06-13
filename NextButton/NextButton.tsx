import Next from '@/headless/Pagination/Next';
import React from 'react';
import styles from './NextButton.module.scss';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import classNames from 'classnames';

type NextButtonProps = React.ComponentProps<typeof Next> & {
    size?: ContentSize;
    radius?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
};

const NextButton = ({
    size = 'md',
    radius = 0,
    backgroundColor = 'inherit',
    borderColor,
    color,
    ...props
}: NextButtonProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--radius': `${radius}px`,
        '--borderColor': borderColor,
        '--background-color': backgroundColor,
    };

    const className = classNames(styles.NextButton, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });
    return <Next {...props} style={{ ...cssVariables, ...props.style }} className={className} />;
};

export default NextButton;
