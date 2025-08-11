import React from 'react';
import styles from './LoadingOverLay.module.scss';
import animationData from 'assets/etc/loading.json';
import Lottie from 'react-lottie';
import classNames from 'classnames';
import DeferredComponent from '@/components/DeferredComponent/DeferredComponent';

type LoadingOverlayProps = {
    children?: React.ReactNode;
    isLoading?: boolean; // ✅ 이름 변경됨
    isFetching?: boolean;
};

const LoadingOverlay = ({ children, isLoading = false, isFetching = false }: LoadingOverlayProps) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const content = (
        <div
            className={classNames(styles.LoadingOverlay, {
                [styles.Initial]: isLoading, // ✅ 여기서도 이름 변경
            })}
        >
            <div style={{ width: 40, height: 40 }}>
                <Lottie options={defaultOptions} />
            </div>
            {children}
        </div>
    );

    if (isLoading) return content;

    return <DeferredComponent active={isFetching}>{content}</DeferredComponent>;
};

export default LoadingOverlay;
