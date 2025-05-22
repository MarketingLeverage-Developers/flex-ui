import ToastProvider, { useToastProvider } from '@/headless/Toast/ToastProvider';
import React from 'react';
import styles from './BasicToast.module.scss';
import Toast from '@/headless/Toast/Toast/Toast';
import classNames from 'classnames';

type BasicTostProviderProps = {
    children: React.ReactNode;
};

const BasicToastProvider = ({ children }: BasicTostProviderProps) => {
    const { type } = useToastProvider();

    const className = classNames(styles.BasicToast, {
        [styles.Error]: type === 'success',
    });

    return (
        <>
            {children} <Toast className={className} />
        </>
    );
};

export default withProvider(BasicToastProvider);

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => (
        <ToastProvider>
            <WrappedComponent {...(props as any)} />
        </ToastProvider>
    );
}
