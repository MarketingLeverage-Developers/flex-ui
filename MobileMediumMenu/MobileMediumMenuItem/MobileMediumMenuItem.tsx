import classNames from 'classnames';
import TabGroup, { useTabGroup } from 'headless/TabGroup/TabGroup';
import styles from './MobileMediumMenuItem.module.scss';

type MobileMediumMenuItemProps = React.ComponentProps<typeof TabGroup.Item>;

const MobileMediumMenuItem = ({ className, ...props }: MobileMediumMenuItemProps) => {
    const { isActiveTab } = useTabGroup();

    const mergedClassName = classNames(styles.MobileMediumMenuItem, className, {
        [styles.active]: isActiveTab(props.value),
    });

    return <TabGroup.Item className={mergedClassName} {...props} />;
};

export default MobileMediumMenuItem;
