import TabGroupItem from 'headless/TabGroup/TabGroupItem';
import React from 'react';
import styles from './ProfileCard.module.scss';
import classNames from 'classnames';
import { useTabGroup } from 'headless/TabGroup/TabGroup';
import Image from 'headful/Image/Image';
import LineItem from 'headful/LineItem/LineItem';

type ProfileCardProps = { profile: string | null; title: string; subTitle: string } & React.ComponentProps<
    typeof TabGroupItem
>;

const ProfileCard = ({ profile, title, subTitle, ...props }: ProfileCardProps) => {
    const { tabGroupValue } = useTabGroup();

    const combinedClassName = classNames(styles.ProfileCard, {
        [styles.Active]: tabGroupValue === props.value,
    });

    return (
        <TabGroupItem {...props} className={combinedClassName}>
            <LineItem>
                <div className={styles.ProfileWrapper}>
                    <Profile width={32} height={32} profile={profile} title={title} />
                    <div className={styles.TextWrapper}>
                        <div className={styles.Title}>{title}</div>
                        <div className={styles.SubTitle}>{subTitle}</div>
                    </div>
                </div>
            </LineItem>
        </TabGroupItem>
    );
};

export default ProfileCard;

type ProfileProps = {
    profile?: string | null;
    title: string;
    width: number;
    height: number;
};

export const Profile = ({ profile, title, width, height }: ProfileProps) => {
    return (
        <>
            {profile ? (
                <Image width={width} height={height} className={styles.Profile} src={profile} />
            ) : (
                <DefaultProfile width={width} height={height} title={title} />
            )}
        </>
    );
};

type DefaultProfileProps = {
    width: number;
    height: number;
    title: string;
};

export const DefaultProfile = ({ width, height, title }: DefaultProfileProps) => {
    const firstLetterOfTitle = title.charAt(0);
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === 'number') {
            return `${dim}px`;
        }
        return dim || 'auto';
    };
    interface CSSPropertiesWithVars extends React.CSSProperties {
        [key: `--${string}`]: string | number;
    }
    const cssVariables: CSSPropertiesWithVars = {
        '--image-width': dimensionToString(width),
        '--image-height': dimensionToString(height),
    };

    return (
        <div className={classNames(styles.Default, styles.Profile)} style={cssVariables}>
            {firstLetterOfTitle}
        </div>
    );
};
