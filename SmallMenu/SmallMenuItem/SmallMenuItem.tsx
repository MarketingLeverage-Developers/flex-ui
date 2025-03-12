import classNames from 'classnames';
import TabGroup, { useTabGroup } from 'headless/TabGroup/TabGroup';
import styles from './SmallMenuItem.module.scss';

type SmallMenuItemProps = React.ComponentProps<typeof TabGroup.Item>;

const SmallMenuItem = (props: SmallMenuItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.SmallMenuItem, {
        [styles.active]: isActiveTab(props.value),
    });

    return <TabGroup.Item className={className} {...props} />;
};

export default SmallMenuItem;
