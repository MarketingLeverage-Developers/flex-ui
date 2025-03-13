import classNames from 'classnames';
import TabGroup, { useTabGroup } from 'headless/TabGroup/TabGroup';
import styles from './MediumMenuItem.module.scss';

type MediumMenuItemProps = React.ComponentProps<typeof TabGroup.Item>;

const MediumMenuItem = ({ className, ...props }: MediumMenuItemProps) => {
    const { isActiveTab } = useTabGroup();

    const mergedClassName = classNames(styles.MediumMenuItem, className, { [styles.active]: isActiveTab(props.value) });

    return <TabGroup.Item className={mergedClassName} {...props} />;
};

export default MediumMenuItem;
