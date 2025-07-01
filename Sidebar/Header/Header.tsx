import React from 'react';
import styles from './Header.module.scss';
import { SidebarMode, useSidebar } from '../Sidebar';
import Logo from '@/assets/images/logo.svg';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

type HeaderProps = {
    fixed?: boolean;
};

const Header = ({ fixed = false }: HeaderProps) => {
    const { mode } = useSidebar();
    const shouldRenderWide = fixed || mode === SidebarMode.WIDE;

    return <>{shouldRenderWide ? <WideHeader fixed={fixed} /> : <NarrowHeader />}</>;
};

export default Header;

type WideHeaderProps = {
    fixed?: boolean;
};

const WideHeader = ({ fixed }: WideHeaderProps) => {
    const { mode, setMode } = useSidebar();

    const handleButtonClick = () => {
        const newMode = mode === SidebarMode.WIDE ? SidebarMode.NARROW : SidebarMode.WIDE;
        setMode(newMode);
    };

    return (
        <div className={styles.Header}>
            <div className={styles.Logo}>
                <span>MLeverage</span>
                <img src={Logo} alt="로고" />
            </div>

            <div className={styles.IconWrapper}>
                {mode === SidebarMode.WIDE ? (
                    <MdKeyboardDoubleArrowLeft className={styles.Icon} onClick={handleButtonClick} />
                ) : (
                    <MdKeyboardDoubleArrowRight className={styles.Icon} onClick={handleButtonClick} />
                )}
            </div>
        </div>
    );
};

const NarrowHeader = () => {
    return (
        <div className={styles.NarrowHeader}>
            <div className={styles.Logo}>
                <img src={Logo} alt="로고" />
            </div>
        </div>
    );
};
