import classNames from 'classnames';
import TabGroup, { useTabGroup } from "headless/TabGroup/TabGroup";
import styles from "./MediumMenuItem.module.scss";

type MediumMenuItemProps = React.ComponentProps<typeof TabGroup.Item>;

const MediumMenuItem = (props: MediumMenuItemProps) => {
  const { isActiveTab } = useTabGroup();

  const className = classNames(styles.MediumMenuItem, {
    [styles.active]: isActiveTab(props.value),
  });

  return <TabGroup.Item className={className} {...props} />;
};

export default MediumMenuItem;
