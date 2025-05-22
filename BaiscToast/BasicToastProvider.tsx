import ToastProvider, { useToastProvider } from '@/headless/Toast/ToastProvider';
import React from 'react';
import styles from './BasicToast.module.scss';
import Toast from '@/headless/Toast/Toast/Toast';
import classNames from 'classnames';
import Success from '@/assets/images/toast-success.svg';
import Fail from '@/assets/images/toast-fail.svg';
import Image from '@/ui-kit/src/components/contents/Image/Image';

type BasicTostProviderProps = {
    children: React.ReactNode;
};

const BasicToastProvider = ({ children }: BasicTostProviderProps) => {
    const { toastValue, type } = useToastProvider();

    const className = classNames(styles.BasicToast, {
        [styles.Open]: toastValue,
        [styles.Closed]: !toastValue,
        // [styles.Error]: type === 'error',
    });

    return (
        <>
            {children}{' '}
            <Toast
                className={className}
                icon={type === 'success' ? <Image width={25} image={Success} /> : <Image width={25} image={Fail} />}
            />
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
