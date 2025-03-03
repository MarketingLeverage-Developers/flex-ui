import TabGroup from "headless/TabGroup/TabGroup";
import styles from "./MediumMenu.module.scss";
import MediumMenuItem from "./MediumMenuItem/MediumMenuItem";
import Layout from "headful/Layout/Layout";

type MediumMenuProps = React.ComponentProps<typeof TabGroup>;

const MediumMenu = (props:MediumMenuProps) => {
    return (
        <Layout.Header>
            <TabGroup {...props}> 
                <div className={styles.MediumMenu}>
                    {props.children}
                </div>
            </TabGroup>
        </Layout.Header>
    ) 
}

export default MediumMenu;

MediumMenu.Item = MediumMenuItem;