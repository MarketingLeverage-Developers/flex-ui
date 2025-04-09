import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';
import animationData from 'assets/etc/develop.json';
import Lottie from 'react-lottie';
import styles from './DevelopArea.module.scss';

const DevelopArea = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={styles.DevelopArea}>
            <Lottie style={{ width: 100, height: 100 }} options={defaultOptions} />

            <span className={styles.Title}>개발 중인 페이지입니다.</span>
            <span className={styles.SubTitle}>빠른 개발을 위해 만전을 다하겠습니다.</span>
        </div>
    );
};

export default DevelopArea;
