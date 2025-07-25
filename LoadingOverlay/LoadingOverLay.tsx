import React from 'react';
import styles from './LoadingOverLay.module.scss';
import animationData from 'assets/etc/loading.json';
import Lottie from 'react-lottie';

type LoadingOverlayProps = {
    children?: React.ReactNode;
};

const LoadingOverlay = ({ children }: LoadingOverlayProps) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={styles.LoadingOverlay}>
            <div style={{ width: 40, height: 40 }}>
                <Lottie options={defaultOptions} />
            </div>
            {children}
        </div>
    );
};

export default LoadingOverlay;
