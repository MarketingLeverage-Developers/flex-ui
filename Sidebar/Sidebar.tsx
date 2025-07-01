import React, { createContext, SetStateAction, useContext, useState } from 'react';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import styles from './Sidebar.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import FixedMenu from './FixedSidebar/FixedSidebar';
import DynamicMenu from './DynamicMenu/DynamicMenu';
import FixedSidebar from './FixedSidebar/FixedSidebar';

export type MenuNode = {
    key: string;
    label: string;
    path?: string;
    icon?: React.ElementType;
    children?: MenuNode[];
    isShow?: boolean;
};

export enum SidebarMode {
    WIDE = 'wide',
    NARROW = 'narrow',
}

type SidebarContextType = {
    mode: SidebarMode;
    setMode: React.Dispatch<SetStateAction<SidebarMode>>;
    isHovered: boolean;
    setIsHovered: React.Dispatch<SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType>({
    mode: SidebarMode.WIDE,
    setMode: () => {},
    isHovered: false,
    setIsHovered: () => {},
});

type SidebarProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
};

const Sidebar = ({ children, defaultValue }: SidebarProps) => {
    const [mode, setMode] = useState(SidebarMode.WIDE);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (mode === SidebarMode.NARROW) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (mode === SidebarMode.NARROW) {
            setIsHovered(false);
        }
    };

    return (
        <SidebarContext.Provider value={{ mode, setMode, isHovered, setIsHovered }}>
            <SelectGroup defaultValue={defaultValue}>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {children}
                </div>
            </SelectGroup>
        </SidebarContext.Provider>
    );
};

export default Sidebar;

export const useSidebar = () => {
    return useContext(SidebarContext);
};

// Sidebar.Item = MenuItem;
Sidebar.Header = Header;
Sidebar.FixedSidebar = FixedSidebar;
Sidebar.DynamicMenu = DynamicMenu;
