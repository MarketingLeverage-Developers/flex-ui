import TabGroup from 'headless/TabGroup/TabGroup';
import styles from './MediumMenu.module.scss';
import MediumMenuItem from './MediumMenuItem/MediumMenuItem';

type MediumMenuProps = React.ComponentProps<typeof TabGroup>;

const MediumMenu = (props: MediumMenuProps) => {
    return (
        <TabGroup {...props}>
            <div className={styles.MediumMenu}>{props.children}</div>
        </TabGroup>
    );
};

export default MediumMenu;

MediumMenu.Item = MediumMenuItem;
