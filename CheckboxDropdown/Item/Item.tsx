import React from 'react';
import classNames from 'classnames';
import styles from './Item.module.scss';
import { FaCheck } from 'react-icons/fa6';
import { useCheckboxGroup } from '@/headless/CheckboxGroup/CheckboxGroup';
import CheckboxGroupItem from '@/headless/CheckboxGroup/CheckboxGroupItem';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import InputA from '@/ui-kit/src/components/contents/Input/A/InputA';
import ButtonE from '@/ui-kit/src/components/contents/Button/E/ButtonE';

type ItemProps = {
    text: string;
    value: string;
    editable?: boolean;
    onCheckboxGroupItemChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEditButtonClick?: () => void;
    onCheckboxGroupItemClick: (value: string[]) => void;
};

const Item = ({
    text,
    value,
    editable,
    onCheckboxGroupItemChange,
    onEditButtonClick,
    onCheckboxGroupItemClick,
}: ItemProps) => {
    const { isChecked } = useCheckboxGroup();

    const isActive = isChecked(value);

    const CheckboxClassName = classNames(styles.Checkbox, {
        [styles.Active]: isActive,
    });

    const TextClassName = classNames(styles.Text, {
        [styles.Active]: isActive,
    });

    const cssVariables: CSSPropertiesWithVars = {};

    return (
        <CheckboxGroupItem
            value={value}
            onCheckboxGroupItemClick={onCheckboxGroupItemClick}
            className={styles.Item}
            style={cssVariables}
        >
            <div className={CheckboxClassName}>
                <FaCheck />
            </div>
            {editable ? (
                <>
                    <InputA
                        size="2xs"
                        full
                        value={value}
                        onChange={(e) => {
                            e.stopPropagation();
                            onCheckboxGroupItemChange && onCheckboxGroupItemChange(e);
                        }}
                    />
                    <ButtonE
                        size="2xs"
                        onClick={(e) => {
                            e.stopPropagation();
                            onEditButtonClick && onEditButtonClick();
                        }}
                    >
                        저장
                    </ButtonE>
                </>
            ) : (
                <>
                    <div className={TextClassName}>
                        <span>{text}</span>
                    </div>
                </>
            )}
        </CheckboxGroupItem>
    );
};

export default Item;
