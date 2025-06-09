import React, { MouseEventHandler, useRef } from 'react';
import Dropdown, { useDropdown } from 'headless/Dropdown/Dropdown';
import styles from './ContentDropdownContent.module.scss';
import classNames from 'classnames';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import X from '@/assets/images/x.svg';
import MiniButton from '@/headful/MiniButton/MiniButton';
import { useInquiryAllGetProvider } from '@/pages/inquiries/pages/indexes/pages/InquiryPage/components/InquiryAllGetProvider/InquiryAllGetProvider';
import { useTableHeight } from '@/pages/inquiries/pages/indexes/pages/InquiryPage/components/TableHeightProvider/TableHeightProvider';
type ContentDropdownContentProps = {
    children: React.ReactNode;
    title: string;
    rowIndex?: number;
};

const ContentDropdownContent = ({ children, title, rowIndex }: ContentDropdownContentProps) => {
    const { dropdownValue } = useDropdown();
    const { closeDropdown } = useDropdown();
    const childArray = React.Children.toArray(children);
    const { tableHeight } = useTableHeight();

    const body = childArray[0];
    const buttons = childArray[1];
    const combinedStyle = classNames(styles.HamburgerDropdownContent, {
        [styles.Open]: dropdownValue, // dropdownValue가 true일 때 Open 클래스 적용
        [styles.Closed]: !dropdownValue, // dropdownValue가 false일 때 Closed 클래스 적용
    });
    const handleItemClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        closeDropdown();
    };
    if (!dropdownValue) {
        return null;
    }
    return (
        dropdownValue && (
            <Dropdown.Content className={combinedStyle} tableHeight={tableHeight}>
                <div className={styles.Header}>
                    <div>{title}</div>
                    <Flex gap={15}>
                        <MiniButton radius={8} type="light">
                            복사
                        </MiniButton>
                        <Image
                            image={X}
                            alt="닫기"
                            style={{ cursor: 'pointer' }}
                            width={15}
                            onClick={handleItemClick}
                        />
                    </Flex>
                </div>
                <div className={styles.Body}>{body}</div>
            </Dropdown.Content>
        )
    );
};

export default ContentDropdownContent;
