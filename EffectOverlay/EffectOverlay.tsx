import React from 'react';
import styles from './EffectOverlay.module.scss';
import classNames from 'classnames';

type EffectOverlayProps = {
    children: React.ReactNode;
    isBlurred?: boolean;
    isEmphasized?: boolean;
};

const EffectOverlay = ({ children, isBlurred = false, isEmphasized = false }: EffectOverlayProps) => {
    const wrapperClass = classNames(styles.EffectOverlay, {
        [styles.Blurred]: isBlurred,
        [styles.Emphasized]: isEmphasized,
    });

    return <div className={wrapperClass}>{children}</div>;
};

export default EffectOverlay;
