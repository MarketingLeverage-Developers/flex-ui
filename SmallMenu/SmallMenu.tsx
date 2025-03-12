import TabGroup from 'headless/TabGroup/TabGroup';
import styles from './SmallMenu.module.scss';
import SmallMenuItem from './SmallMenuItem/SmallMenuItem';
import FlexBox from 'headful/FlexBox/FlexBox';

type SmallMenuProps = React.ComponentProps<typeof TabGroup>;

const SmallMenu = (props: SmallMenuProps) => {
    return (
        <TabGroup {...props}>
            <div className={styles.SmallMenu}>{props.children}</div>
        </TabGroup>
    );
};

export default SmallMenu;

SmallMenu.Item = SmallMenuItem;
