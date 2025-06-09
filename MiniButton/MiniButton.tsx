import React, { HTMLAttributes } from 'react';
import styles from './MiniButton.module.scss';
import classNames from 'classnames';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type MiniButtonProps = HTMLAttributes<HTMLButtonElement> & {
    type: 'brand' | 'base' | 'warning' | 'light';
    radius?: number;
};

const MiniButton = ({ type, radius = 0, ...props }: MiniButtonProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--radius': `${radius}px`,
    };
    const combinedClassName = classNames(styles.MiniButton, {
        [styles.Brand]: type === 'brand',
        [styles.Warning]: type === 'warning',
        [styles.Light]: type === 'light',
    });

    return <button {...props} className={combinedClassName} style={cssVariables} />;
};

export default MiniButton;
