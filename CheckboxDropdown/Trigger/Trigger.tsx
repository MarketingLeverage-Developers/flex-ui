import Dropdown from '@/headless/Dropdown/Dropdown';
import styles from './Trigger.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import { useCheckboxDropdownContext } from '../CheckboxDropdown';
import Display from '../Display/Display';

type TriggerProps = {
    render?: (value: string[]) => React.ReactNode;
    placeholder: string;
};

const Trigger = ({ render, placeholder }: TriggerProps) => {
    const { size, disabled } = useCheckboxDropdownContext();

    const combinedStyle = classNames(styles.Trigger, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Disabled]: disabled,
    });

    return (
        <Dropdown.Trigger className={combinedStyle} disabled={disabled} aria-disabled={disabled}>
            <Display className={styles.Display} render={render} placeholder={placeholder} />
            <MdKeyboardArrowDown className={styles.Icon} />
        </Dropdown.Trigger>
    );
};

export default Trigger;
