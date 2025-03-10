import React, { useEffect, useRef, useState } from 'react';
import styles from './Top.module.scss';
import classNames from 'classnames';

type TopProps = {
    children?: React.ReactNode;
};

const Top = ({ children }: TopProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasChildNodes, setHasChildNodes] = useState<boolean>(false);

    useEffect(() => {
        if (containerRef.current) {
            const observer = new MutationObserver(() => {
                if (containerRef.current) {
                    setHasChildNodes(containerRef.current.childNodes.length > 0);
                }
            });
            observer.observe(containerRef.current, { childList: true });
            // 초기 체크
            setHasChildNodes(containerRef.current.childNodes.length > 0);
            return () => observer.disconnect();
        }
    }, []);

    const combinedClassName = classNames(styles.Top, {
        [styles.Hidden]: !hasChildNodes,
    });

    return (
        <div id="page-top" className={combinedClassName} ref={containerRef}>
            {children}
        </div>
    );
};

export default Top;
