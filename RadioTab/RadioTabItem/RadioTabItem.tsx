import classNames from 'classnames';
import TabGroup, { useTabGroup } from 'headless/TabGroup/TabGroup';
import styles from './RadioTabItem.module.scss';

type RadioTabItemProps = React.ComponentProps<typeof TabGroup.Item>;

const RadioTabItem = (props: RadioTabItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.RadioTabItem, {
        [styles.Active]: isActiveTab(props.value),
    });

    return <TabGroup.Item className={className} {...props} />;
};

export default RadioTabItem;
