import React, { createContext, SetStateAction, useContext, useState } from 'react';
import SelectGroup from 'headless/SelectGroup/SelectGroup';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import Header from './Header/Header';
import DynamicMenu from './DynamicMenu/DynamicMenu';
import OpenButton from './OpenButton/OpenButton';
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

type CompanySidebarContextType = {
    mode: SidebarMode;
    setMode: React.Dispatch<SetStateAction<SidebarMode>>;
    // isHovered: boolean;
    // setIsHovered: React.Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const CompanySidebarContext = createContext<CompanySidebarContextType>({
    mode: SidebarMode.WIDE,
    setMode: () => {},
    // isHovered: false,
    // setIsHovered: () => {},
    isOpen: false,
    setIsOpen: () => {},
});

type CompanySidebarProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
};

const CompanySidebar = ({ children, defaultValue }: CompanySidebarProps) => {
    const [mode, setMode] = useState(SidebarMode.WIDE);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // const handleMouseEnter = () => {
    //     if (mode === SidebarMode.NARROW) {
    //         setIsHovered(true);
    //     }
    // };

    // const handleMouseLeave = () => {
    //     if (mode === SidebarMode.NARROW) {
    //         setIsHovered(false);
    //     }
    // };

    return (
        <CompanySidebarContext.Provider value={{ mode, setMode, isOpen, setIsOpen }}>
            <SelectGroup defaultValue={defaultValue}>
                <div>{children}</div>
            </SelectGroup>
        </CompanySidebarContext.Provider>
    );
};

export default CompanySidebar;

export const useSidebar = () => {
    return useContext(CompanySidebarContext);
};

// CompanySidebar.Item = MenuItem;
CompanySidebar.Header = Header;
CompanySidebar.FixedSidebar = FixedSidebar;
CompanySidebar.DynamicMenu = DynamicMenu;
CompanySidebar.OpenButton = OpenButton;
