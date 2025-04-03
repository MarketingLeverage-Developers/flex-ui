import Flex from 'headful/Flex/Flex';
import Text from 'headful/Text/Text';

type ArticleTemplateProps = {
    title: string;
    content: string;
};

const ArticleTemplate = ({ title, content }: ArticleTemplateProps) => {
    return (
        <Flex padding={40} flexDirection="column" width={'100%'} gap={40}>
            <Text fontSize={'var(--font-size-5xl)'} fontWeight={'var(--font-weight-bold)'}>
                {title}
            </Text>
            <Text fontSize={'var(--font-size-md)'}>{content}</Text>
        </Flex>
    );
};

export default ArticleTemplate;
