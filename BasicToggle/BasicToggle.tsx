import Toggle, { useToggle } from 'headless/Toggle/Toggle';
import styles from './BasicToggle.module.scss';
import classNames from 'classnames';

type BasicToggleProps = {
    onToggleClick: (value: boolean) => void;
    defaultValue: boolean;
};

const BasicToggle = ({ onToggleClick, defaultValue }: BasicToggleProps) => {
    const { toggleValue, changeToggle } = useToggle();

    const handleToggleClick = (value: boolean) => {
        onToggleClick(value);
        changeToggle();
    };

    const combinedClassName = classNames(styles.BasicToggle, {
        [styles.Active]: defaultValue,
    });

    return (
        <Toggle defaultValue={defaultValue}>
            <Toggle.Button className={combinedClassName} onClick={() => handleToggleClick(toggleValue)}></Toggle.Button>
        </Toggle>
    );
};

export default BasicToggle;
