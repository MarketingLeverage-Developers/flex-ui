import React from 'react';
import TemplateCard from '../TemplateCard/TemplateCard';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import styles from './TemplateEditableCard.module.scss';
import CheckboxGroup, { useCheckboxGroup } from '@/headless/CheckboxGroup/CheckboxGroup';
import classNames from 'classnames';
import ButtonB from '@/ui-kit/src/components/contents/Button/B/ButtonB';
import Text from '@/ui-kit/src/components/contents/Text/Text';

type TemplateEditableCard = React.ComponentProps<typeof TemplateCard> & {
    id: number;
    useAt: number;
    onCheckboxClick: (value: string[]) => void;
    onHideButtonClick: () => void;
    onModalButtonClick: () => void;
};

const TemplateEditableCard = ({
    id,
    useAt,
    onCheckboxClick,
    onHideButtonClick,
    onModalButtonClick,
    ...props
}: TemplateEditableCard) => {
    const { isChecked } = useCheckboxGroup();

    const combinedClassName = classNames(styles.Checkbox, {
        [styles.Active]: isChecked(id.toString()),
    });

    return (
        <Flex gap={15}>
            <CheckboxGroup.Item
                className={combinedClassName}
                value={id.toString()}
                onCheckboxGroupItemClick={onCheckboxClick}
            />

            <TemplateCard {...props}>
                <div className={styles.EditableImage}>
                    <TemplateCard.Image image={props.image} />
                    <div className={styles.Background}>
                        <div className={styles.Buttons}>
                            <ButtonB size="xs" onClick={onModalButtonClick}>
                                수정
                            </ButtonB>
                            <ButtonB size="xs" color="#fff" onClick={onHideButtonClick}>
                                <Text color="#1A73E8" size={16}>
                                    {useAt ? '숨김' : '해제'}
                                </Text>
                            </ButtonB>
                        </div>
                    </div>
                </div>
            </TemplateCard>
        </Flex>
    );
};

export default TemplateEditableCard;
