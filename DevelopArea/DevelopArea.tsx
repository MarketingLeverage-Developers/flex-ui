import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';
import animationData from 'assets/etc/develop.json';
import Lottie from 'react-lottie';

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
        <Flex height={'100%'} flexDirection="column" justifyContent="center" alignItems="center" gap={16}>
            <Lottie style={{ width: 100, height: 100 }} options={defaultOptions} />
            <Text color="var(--base-color-primary)" fontSize="var(--font-size-lg)" fontWeight="var(--font-weight-bold)">
                개발 중인 페이지입니다.
            </Text>
            <Text color="var(--base-color-tertiary)" fontSize="var(--font-size-sm)">
                빠른 개발을 위해 만전을 다하겠습니다.
            </Text>
        </Flex>
    );
};

export default DevelopArea;
