import DeferredComponent from '@/components/DeferredComponent/DeferredComponent';
import { useIsMutating } from '@tanstack/react-query';

const FullscreenLoader = () => {
    const isMutating = useIsMutating();

    if (isMutating === 0) return null;

    return (
        <DeferredComponent active={isMutating > 0}>
            <div style={styles.overlay}>
                <div style={styles.spinner} />
                <div style={styles.text}>잠시만 기다려 주세요...</div>
            </div>
        </DeferredComponent>
    );
};

export default FullscreenLoader;

const spinAnimation = {
    animation: 'spin 1s linear infinite',
};

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(3px)',
    },
    spinner: {
        width: '60px',
        height: '60px',
        border: '6px solid #e0e0e0',
        borderTop: '6px solid #3b82f6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '16px',
    },
    text: {
        fontSize: '16px',
        color: '#333',
        fontWeight: 500,
    },
};

// 전역 스타일로 spin 애니메이션 등록 (index.html or layout level에서 한 번만)
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(globalStyle);
