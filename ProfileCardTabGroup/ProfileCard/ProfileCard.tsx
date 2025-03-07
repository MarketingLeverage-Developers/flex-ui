import TabGroupItem from 'headless/TabGroup/TabGroupItem';
import React from 'react';
import styles from './ProfileCard.module.scss';
import FlexBox from 'headful/FlexBox/FlexBox';
import Text from 'headful/Text/Text';
import classNames from 'classnames';

type ProfileCardProps = { profile?: string; title: string; subTitle: string } & React.ComponentProps<
    typeof TabGroupItem
>;

const ProfileCard = ({ profile, title, subTitle, ...props }: ProfileCardProps) => {
    return (
        <TabGroupItem {...props} className={styles.ProfileCard}>
            <FlexBox alignItems="center" gap={12}>
                <Profile profile={profile} title={title} />
                <FlexBox flexDirection="column" gap={4}>
                    <Text fontSize={14} fontWeight={700} color="#3e4449">
                        {title}
                    </Text>
                    <Text fontSize={12} color="#cacccd">
                        {subTitle}
                    </Text>
                </FlexBox>
            </FlexBox>
        </TabGroupItem>
    );
};

export default ProfileCard;

type ProfileProps = {
    profile?: string;
    title: string;
};

const Profile = ({ profile, title }: ProfileProps) => {
    const firstLetterOfTitle = title.charAt(0);

    return (
        <>
            {profile ? (
                <img className={styles.Profile} src={profile} />
            ) : (
                <div className={classNames(styles.Default, styles.Profile)}>{firstLetterOfTitle}</div>
            )}
        </>
    );
};
