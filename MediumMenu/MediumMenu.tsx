import TabGroup from 'headless/TabGroup/TabGroup';
import classNames from 'classnames';
import styles from './MediumMenu.module.scss';
import MediumMenuItem from './MediumMenuItem/MediumMenuItem';

type MediumMenuProps = { className?: string } & React.ComponentProps<typeof TabGroup>;

const MediumMenu = ({ children, className, ...props }: MediumMenuProps) => {
    return (
        <TabGroup {...props}>
            <div className={classNames(styles.MediumMenu, className)}>{children}</div>
        </TabGroup>
    );
};

export default MediumMenu;

MediumMenu.Item = MediumMenuItem;
