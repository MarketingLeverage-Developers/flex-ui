import Toggle, { useToggle } from 'headless/Toggle/Toggle';
import styles from './BasicToggle.module.scss';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';

type BasicToggleProps = {
    onToggleClick: (value: boolean) => void;
    defaultValue: boolean;
    disabled?: boolean; // ✅ 추가
};

const BasicToggle = ({ onToggleClick, defaultValue, disabled = false }: BasicToggleProps) => {
    const { toggleValue, changeToggle } = useToggle();

    const handleToggleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        if (disabled) return; // ✅ 클릭 방지
        onToggleClick(toggleValue);
        changeToggle();
    };

    const combinedClassName = classNames(styles.BasicToggle, {
        [styles.Active]: defaultValue,
        [styles.Disabled]: disabled, // ✅ 클래스 조건 추가
    });

    return (
        <Toggle defaultValue={defaultValue}>
            <Toggle.Button
                className={combinedClassName}
                onClick={handleToggleClick}
                disabled={disabled} // ✅ 접근성도 고려
            />
        </Toggle>
    );
};

export default BasicToggle;
