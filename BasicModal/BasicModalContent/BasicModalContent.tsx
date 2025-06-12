import Modal from '@/headless/Modal/Modal';
import styles from './BasicModalContent.module.scss';
import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import { dimensionToVariable } from '@/ui-kit/src/utils';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import X from '@/assets/images/x.svg';

type ContentProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    width?: string;
    height?: string;
    color?: HexColor;
    children: React.ReactNode;
};

const Content = ({ width = '80%', height = '80%', color, title, children, ...props }: ContentProps) => {
    const childArray = React.Children.toArray(children);

    const body = childArray[0];
    const buttons = childArray[1];
    const subContent = childArray[2];
    const combinedStyle = classNames(styles.Content, props.className);

    const contentVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
    };

    const headerVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <Modal.Content {...props} className={combinedStyle} style={{ ...contentVariables }}>
            <div className={styles.Wrapper}>
                <div className={styles.Header} style={{ ...headerVariables }}>
                    <Flex justify="space-between" align="center">
                        {title}

                        <Flex gap={35} align="center">
                            {buttons}
                            <Modal.Close>
                                <Image image={X} alt="닫기" style={{ cursor: 'pointer' }} width={15} />
                            </Modal.Close>
                        </Flex>
                    </Flex>
                </div>
                <div className={styles.Body}>{body}</div>
                {subContent && <div className={styles.SubContent}>{subContent}</div>}
            </div>
        </Modal.Content>
    );
};

export default Content;
