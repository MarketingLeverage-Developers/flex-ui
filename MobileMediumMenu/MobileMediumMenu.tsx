import TabGroup from 'headless/TabGroup/TabGroup';
import classNames from 'classnames';
import styles from './MobileMediumMenu.module.scss';
import MobileMediumMenuItem from './MobileMediumMenuItem/MobileMediumMenuItem';

type MobileMediumMenuProps = { className?: string } & React.ComponentProps<typeof TabGroup>;

const MobileMediumMenu = ({ children, className, ...props }: MobileMediumMenuProps) => {
    return (
        <TabGroup {...props}>
            <div className={classNames(styles.MobileMediumMenu, className)}>{children}</div>
        </TabGroup>
    );
};

export default MobileMediumMenu;

MobileMediumMenu.Item = MobileMediumMenuItem;
