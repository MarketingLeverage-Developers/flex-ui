import TabGroup from 'headless/TabGroup/TabGroup';
import React from 'react';
import styles from './ProfileCardTabGroup.module.scss';
import ProfileCard from './ProfileCard/ProfileCard';

type ProfileCardTabGroup = { children: React.ReactNode } & React.ComponentProps<typeof TabGroup>;

const ProfileCardTabGroup = ({ children, ...props }: ProfileCardTabGroup) => {
    return (
        <TabGroup {...props}>
            <div className={styles.ProfileCardTabGroup}>{children}</div>
        </TabGroup>
    );
};

export default ProfileCardTabGroup;

ProfileCardTabGroup.Item = ProfileCard;
