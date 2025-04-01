import classNames from 'classnames';
import TabGroup, { useTabGroup } from 'headless/TabGroup/TabGroup';
import styles from './BasicTabItem.module.scss';

type BasicTabItemProps = React.ComponentProps<typeof TabGroup.Item>;

const BasicTabItem = (props: BasicTabItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.BasicTabItem, {
        [styles.Active]: isActiveTab(props.value),
    });

    return <TabGroup.Item className={className} {...props} />;
};

export default BasicTabItem;
