import TabGroup from 'headless/TabGroup/TabGroup';
import styles from './RadioTab.module.scss';
import RadioTabItem from './RadioTabItem/RadioTabItem';

type RadioTabProps = React.ComponentProps<typeof TabGroup>;

const RadioTab = (props: RadioTabProps) => {
    return (
        <TabGroup {...props}>
            <div className={styles.RadioTab}>{props.children}</div>
        </TabGroup>
    );
};

export default RadioTab;

RadioTab.Item = RadioTabItem;
