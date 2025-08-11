import React, { useEffect, useState } from 'react';
import styles from './A4.module.scss';

type A4Props = {
    children: React.ReactNode;
    isPrintMode?: boolean; // PDF 저장용 모드
};

const A4 = ({ children, isPrintMode = false }: A4Props) => {
    const [scale, setScale] = useState(1);
    const A4_WIDTH = 794;
    const A4_HEIGHT = (A4_WIDTH * 297) / 210;
    const PADDING = 0;

    useEffect(() => {
        if (isPrintMode) return; // PDF 모드일 땐 scale 계산 X

        const resize = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const scaleX = (viewportWidth - PADDING * 2) / A4_WIDTH;
            const scaleY = (viewportHeight - PADDING * 2) / A4_HEIGHT;

            const nextScale = Math.min(scaleX, scaleY, 1);
            setScale(nextScale);
        };

        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [isPrintMode]);

    const scaledStyle = isPrintMode
        ? {}
        : {
              transform: `scale(${scale})`,
              transformOrigin: 'center',
              width: A4_WIDTH,
              height: A4_HEIGHT,
          };

    return (
        <div
            style={{
                width: isPrintMode ? A4_WIDTH : A4_WIDTH * scale,
                height: isPrintMode ? A4_HEIGHT : A4_HEIGHT * scale,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
                backgroundColor: isPrintMode ? 'transparent' : '#e0e0e0',
                margin: 'auto',
            }}
        >
            <div style={scaledStyle}>
                <div id="report-slide" className={styles.A4}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default A4;
