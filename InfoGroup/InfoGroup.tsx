import React from 'react';
import Flex from 'headful/Flex/Flex';
import InfoGroupItem from './InfoGroupItem/InfoGroupItem';
import InfoGroupHead from './InfoGroupHead/InfoGroupHead';

type InfoGroupProps = {
    children: React.ReactNode;
};

const InfoGroup = ({ children }: InfoGroupProps) => {
    return <Flex flexDirection="column">{children}</Flex>;
};

export default InfoGroup;

InfoGroup.Item = InfoGroupItem;
InfoGroup.Head = InfoGroupHead;
