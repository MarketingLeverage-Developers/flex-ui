import React from 'react';
import { IconType } from 'react-icons';
import { MenuNode, SidebarMode, useSidebar } from '../Sidebar';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import IconMenu from '../IconItem/IconItem';
import MenuItem from '../MenuItem/MenuItem';
import AccordionItem from '../AccordionItem/AccordionItem';
import IconItem from '../IconItem/IconItem';

type MenuProps = {
    menu: MenuNode;
    onMenuClick: (value: SelectGroupValue) => void;
    fixed?: boolean;
};

const Menu = ({ menu, onMenuClick, fixed }: MenuProps) => {
    const { mode } = useSidebar();

    if (!menu.children || menu.children.length === 0) return null;

    const shouldShowAccordion = fixed || mode === SidebarMode.WIDE;

    return (
        <>
            {shouldShowAccordion ? (
                <AccordionItem key={menu.key} value={menu.key} icon={menu.icon as IconType} label={menu.label}>
                    {menu.children.map((child) => (
                        <MenuItem
                            key={child.key}
                            value={{ value: child.path!, label: child.label }}
                            onSelectGroupItemClick={onMenuClick}
                        />
                    ))}
                </AccordionItem>
            ) : (
                <IconItem icon={menu.icon as IconType} value={menu.key} />
            )}
        </>
    );
};

export default Menu;
