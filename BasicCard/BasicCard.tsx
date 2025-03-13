import React from 'react';
import styles from './BasicCard.module.scss';
import Flex from 'headful/Flex/Flex';
import Block from 'headful/Block/Block';
import { Overview } from 'types/model/overview';
import Button from 'headless/Toggle/Button';
import Image from 'headful/Image/Image';
import Text from 'headful/Text/Text';
import ButtonToggle from 'headful/ButtonToggle/ButtonToggle';
import ServerSwitchToggle from 'pages/NoticePage/components/OverviewAllGetCardGrid/ServerSwitchToggle/ServerSwitchToggle';
import { formatNumberWithCommas } from 'utils/utils';
import { Profile } from 'headful/ProfileCardTabGroup/ProfileCard/ProfileCard';

type BasicCardProps = {
    overview: Overview;
};

const BasicCard = ({ overview }: BasicCardProps) => {
    const {
        businessType,
        companyName,
        marketerName,
        advNumber,
        avgThisMonth,
        avgThreeMonth,
        solutionCount,
        useDays,
        avgComparison,
        thumbnailPath,
    } = overview;

    return (
        <Flex gap={4} flexDirection="column" className={styles.BasicCard}>
            <Flex justifyContent="space-between" alignItems="center">
                <Block>
                    <Text fontSize="var(--font-size-lg)" fontWeight="var(--font-weight-bold)">
                        {businessType}
                    </Text>
                </Block>
                <Block>
                    <ServerSwitchToggle />
                </Block>
            </Flex>
            <Flex gap={8} alignItems="center">
                {false ? (
                    <Image src={thumbnailPath as string} width={30} height={30} borderRadius={'var(--border-radius)'} />
                ) : (
                    <Profile title={companyName} width={30} height={30} />
                )}

                <Block>
                    <Text fontSize="var(--font-size-sm)" fontWeight="var(--font-weight-semi-bold)">
                        {companyName}
                    </Text>
                </Block>
            </Flex>
            <Block>
                <Text fontSize="var(--font-size-xs)" fontWeight="var(--font-weight-semi-bold)">
                    {marketerName}
                </Text>
            </Block>
            <Block>
                <Text fontSize="var(--font-size-xs)" fontWeight="var(--font-weight-semi-bold)">
                    {formatNumberWithCommas(advNumber)}
                </Text>
            </Block>
            <Flex justifyContent="space-between">
                <Block>
                    <Text fontSize="var(--font-size-xs)" fontWeight="var(--font-weight-semi-bold)">
                        {formatNumberWithCommas(avgThisMonth.advCost)}&nbsp;/&nbsp;
                        {formatNumberWithCommas(avgThisMonth.unitPrice)}
                    </Text>
                </Block>
                <Block>
                    <Text fontSize="var(--font-size-xs)" fontWeight="var(--font-weight-semi-bold)">
                        마레솔루션&nbsp;
                        <Text
                            fontSize="var(--font-size-xs)"
                            fontWeight="var(--font-weight-semi-bold)"
                            color="var(--brand-color-primary)"
                        >
                            [{solutionCount}]회차
                        </Text>
                    </Text>
                </Block>
            </Flex>
            <Flex justifyContent="space-between">
                <Block>
                    <Text fontSize="var(--font-size-xs)" fontWeight="var(--font-weight-semi-bold)">
                        {formatNumberWithCommas(avgThreeMonth.advCost)}&nbsp;/&nbsp;
                        {formatNumberWithCommas(avgThreeMonth.unitPrice)}
                    </Text>
                </Block>
                <Block>
                    <Text
                        fontSize="var(--font-size-2xs)"
                        fontWeight="var(--font-weight-semi-bold)"
                        color="var(--base-color-tertiary)"
                    >
                        누적 {useDays}일 이용중입니다.
                    </Text>
                </Block>
            </Flex>
            <Flex justifyContent="space-between">
                <Block>
                    <Text
                        fontSize="var(--font-size-2xs)"
                        fontWeight="var(--font-weight-semi-bold)"
                        color="var(--base-color-tertiary)"
                    >
                        평균대비 {avgComparison}% 높습니다.{' '}
                    </Text>
                </Block>
                <Block>
                    <Text
                        fontSize="var(--font-size-2xs)"
                        fontWeight="var(--font-weight-semi-bold)"
                        color="var(--warning-color-primary)"
                    >
                        (잔여 9일 - 추가 연장 안내)
                    </Text>
                </Block>
            </Flex>
        </Flex>
    );
};

export default BasicCard;
