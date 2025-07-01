import React from 'react';
import styles from './FixedSidebar.module.scss';
import { MenuNode, useSidebar } from '../Sidebar';
import Menu from '../Menu/Menu';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import Portal from '@/headless/Portal/Portal';
import Header from '../Header/Header';

type FixedMenuProps = {
    menuTree: MenuNode[];
    onMenuClick: (value: SelectGroupValue) => void;
};

const FixedSidebar = ({ menuTree, onMenuClick }: FixedMenuProps) => {
    const { isHovered, isOpen } = useSidebar();

    return (
        <>
            {(isHovered || isOpen) && (
                <Portal>
                    <div className={styles.FixedSidebar}>
                        <Header fixed />
                        {menuTree.map((menu) => {
                            if (!menu.children || menu.children.length === 0) return null;
                            return <Menu fixed menu={menu} onMenuClick={onMenuClick} />;
                        })}
                    </div>
                </Portal>
            )}
        </>
    );
};

export default FixedSidebar;
