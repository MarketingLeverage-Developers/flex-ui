import Text from '@/ui-kit/src/components/contents/Text/Text';
import { FontSize, FontWeight } from '../../ui-kit/src/types';

type FormTitleProps = {
    title: string;
    size?: FontSize;
    weight?: FontWeight;
    color?: string;
};

const FormTitle = ({ title, size, weight, color }: FormTitleProps) => {
    return (
        <>
            <Text size={size} align="center" weight={weight} color={color}>
                {title}
            </Text>
        </>
    );
};

export default FormTitle;
