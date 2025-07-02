import React from 'react';
import styles from './Header.module.scss';
import { SidebarMode, useSidebar } from '../Sidebar';
import Logo from '@/assets/images/logo.svg';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

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
    return (
        <div className={styles.Header}>
            <div className={styles.Logo}>
                <img src={Logo} alt="로고" />
                <span>MLeverage</span>
            </div>

            <ModeButton />
            <CloseButton />
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

const ModeButton = () => {
    const { mode, setMode } = useSidebar();

    const handleButtonClick = () => {
        const newMode = mode === SidebarMode.WIDE ? SidebarMode.NARROW : SidebarMode.WIDE;
        setMode(newMode);
    };
    return (
        <div className={styles.ModeButton}>
            {mode === SidebarMode.WIDE ? (
                <MdKeyboardDoubleArrowLeft className={styles.Icon} onClick={handleButtonClick} />
            ) : (
                <MdKeyboardDoubleArrowRight className={styles.Icon} onClick={handleButtonClick} />
            )}
        </div>
    );
};

const CloseButton = () => {
    const { setIsOpen } = useSidebar();

    const handleButtonClick = () => {
        setIsOpen(false);
    };
    return (
        <div className={styles.CloseButton}>
            <IoMdClose className={styles.Icon} onClick={handleButtonClick} />
        </div>
    );
};
