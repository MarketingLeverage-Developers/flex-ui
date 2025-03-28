import Dropdown from 'headless/Dropdown/Dropdown';
import { MouseEventHandler } from 'react';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import styles from './HamburgerDropdownTrigger.module.scss';

type HamburgerDropdownTriggerProps = {};

const HamburgerDropdownTrigger = ({}: HamburgerDropdownTriggerProps) => {
    const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
    };

    return (
        <Dropdown.Trigger onClick={handleTriggerClick} className={styles.HamburgerDropdownTrigger}>
            <HiMiniEllipsisHorizontal size={20} />
        </Dropdown.Trigger>
    );
};

export default HamburgerDropdownTrigger;
