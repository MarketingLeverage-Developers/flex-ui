import Dropdown from 'headless/Dropdown/Dropdown';
import { MouseEventHandler } from 'react';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import styles from './ContentDropdownTrigger.module.scss';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type ContentDropdownTriggerTriggerProps = {
    children: React.ReactNode;
    radius?: number;
};

const ContentDropdownTrigger = ({ children, radius = 0 }: ContentDropdownTriggerTriggerProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--radius': `${radius}px`,
    };
    const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
    };

    return (
        <Dropdown.Trigger onClick={handleTriggerClick} className={styles.HamburgerDropdownTrigger} style={cssVariables}>
            {children}
        </Dropdown.Trigger>
    );
};

export default ContentDropdownTrigger;
