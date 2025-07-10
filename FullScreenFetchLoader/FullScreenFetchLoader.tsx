import { useIsFetching } from '@tanstack/react-query';
import React from 'react';

const FullscreenFetchLoader = () => {
    const isFetching = useIsFetching();

    if (isFetching === 0) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.spinner} />
            <div style={styles.text}>데이터를 불러오는 중입니다...</div>
        </div>
    );
};

export default FullscreenFetchLoader;

// --- Styles ---
const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ 검은 배경
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(2px)',
    },
    spinner: {
        width: '60px',
        height: '60px',
        border: '6px solid rgba(255, 255, 255, 0.3)',
        borderTop: '6px solid white',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '16px',
    },
    text: {
        fontSize: '16px',
        color: '#fff',
        fontWeight: 500,
    },
};

// --- Global animation style (once) ---
if (typeof window !== 'undefined' && !document.getElementById('fullscreen-loader-style')) {
    const style = document.createElement('style');
    style.id = 'fullscreen-loader-style';
    style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
    document.head.appendChild(style);
}
