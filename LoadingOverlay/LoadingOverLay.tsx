import React from 'react';
import styles from './LoadingOverLay.module.scss';
import animationData from 'assets/etc/loading.json';
import Lottie from 'react-lottie';
import classNames from 'classnames';

type LoadingOverlayProps = {
    children?: React.ReactNode;
    isInitial?: boolean;
};

const LoadingOverlay = ({ children, isInitial = false }: LoadingOverlayProps) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div
            className={classNames(styles.LoadingOverlay, {
                [styles.Initial]: isInitial,
            })}
        >
            <div style={{ width: 40, height: 40 }}>
                <Lottie options={defaultOptions} />
            </div>
            {children}
        </div>
    );
};

export default LoadingOverlay;
