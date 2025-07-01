import React from 'react';
import styles from './Header.module.scss';
import { SidebarMode, useSidebar } from '../CompanySidebar';
import Logo from '@/assets/images/logo.svg';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

type HeaderProps = {
    fixed?: boolean;
    image: string | null;
    text: string;
};

const Header = ({ image, text, fixed = false }: HeaderProps) => {
    const { mode } = useSidebar();
    const shouldRenderWide = fixed || mode === SidebarMode.WIDE;

    return <>{shouldRenderWide ? <WideHeader image={image} text={text} /> : <NarrowHeader image={image} />}</>;
};

export default Header;

type WideHeaderProps = {
    image: string | null;
    text: string;
};

const WideHeader = ({ image, text }: WideHeaderProps) => {
    return (
        <div className={styles.Header}>
            <div className={styles.Logo}>
                {image ? <img src={image} alt="회사 이미지" /> : <div className={styles.Default} />}
                <span>{text}</span>
            </div>

            <ModeButton />
            <CloseButton />
        </div>
    );
};

type NarrowHeaderProps = {
    image: string | null;
};

const NarrowHeader = ({ image }: NarrowHeaderProps) => {
    return (
        <div className={styles.NarrowHeader}>
            <div className={styles.Logo}>
                {image ? <img src={image} alt="회사 이미지" /> : <div className={styles.Default} />}
            </div>
            <ModeButton />
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
