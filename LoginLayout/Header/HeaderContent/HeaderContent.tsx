import Text from '@/ui-kit/src/components/contents/Text/Text';

const HeaderContent = ({ title }: { title?: string }) => {
    return (
        <Text size={18} weight={500}>
            {title ?? '마케팅레버리지 통합관리자'}
        </Text>
    );
};
export default HeaderContent;
