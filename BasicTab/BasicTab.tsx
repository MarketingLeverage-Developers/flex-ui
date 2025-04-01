import TabGroup from 'headless/TabGroup/TabGroup';
import styles from './BasicTab.module.scss';
import BasicTabItem from './BasicTab/BasicTabItem';
import FlexBox from 'headful/Flex/Flex';

type BasicTabProps = React.ComponentProps<typeof TabGroup>;

const BasicTab = (props: BasicTabProps) => {
    return (
        <TabGroup {...props}>
            <div className={styles.BasicTab}>{props.children}</div>
        </TabGroup>
    );
};

export default BasicTab;

BasicTab.Item = BasicTabItem;
