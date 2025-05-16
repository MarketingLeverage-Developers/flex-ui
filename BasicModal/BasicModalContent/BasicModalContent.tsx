import Modal from '@/headless/Modal/Modal';
import styles from './BasicModalContent.module.scss';
import { HTMLAttributes } from 'react';
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
            <div className={styles.Header} style={{ ...headerVariables }}>
                <Flex justify="space-between">
                    {title}
                    <Modal.Close>
                        <Image image={X} alt="닫기" style={{ cursor: 'pointer' }} width={20} />
                    </Modal.Close>
                </Flex>
            </div>
            <div className={styles.Body}>{children}</div>
        </Modal.Content>
    );
};

export default Content;
