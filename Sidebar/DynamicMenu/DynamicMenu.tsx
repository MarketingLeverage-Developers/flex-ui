import styles from './DynamicMenu.module.scss';
import { MenuNode } from '../Sidebar';
import Menu from '../Menu/Menu';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import Header from '../Header/Header';

type DynamicMenuProps = {
    menuTree: MenuNode[];
    onMenuClick: (value: SelectGroupValue) => void;
};

const DynamicMenu = ({ menuTree, onMenuClick }: DynamicMenuProps) => {
    return (
        <>
            <Header />
            <div className={styles.DynamicMenu}>
                {menuTree.map((menu) => {
                    if (!menu.children || menu.children.length === 0) return null;
                    return <Menu key={menu.key} menu={menu} onMenuClick={onMenuClick} />;
                })}
            </div>
        </>
    );
};

export default DynamicMenu;
