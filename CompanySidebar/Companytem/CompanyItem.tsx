import React from 'react';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import styles from './CompanyItem.module.scss';
import classNames from 'classnames';
import { SidebarMode, useSidebar } from '../CompanySidebar';
import ProfileItem from '../ProfileItem/ProfileItem';
import { Company } from '@/types/model/company';
import CompanyProfileItem from '../CompanyProfileItem/CompanyProfileItem';

type CompanyItemProps = {
    fixed?: boolean;
    company: any;
} & React.ComponentProps<typeof SelectGroup.Item>;

const CompanyItem = ({ value, company, fixed, onSelectGroupItemClick }: CompanyItemProps) => {
    const { selectGroupValue } = useSelectGroup();
    const { mode } = useSidebar();

    const shouldShowAccordion = fixed || mode === SidebarMode.WIDE;

    const combinedClassName = classNames(styles.CompanyItem, {
        [styles.Active]: value === selectGroupValue,
    });

    return (
        <SelectGroup.Item className={combinedClassName} value={value} onSelectGroupItemClick={onSelectGroupItemClick}>
            {shouldShowAccordion ? (
                <CompanyProfileItem
                    image={company.profile}
                    text={company.companyName}
                    isActive={value === selectGroupValue}
                    onBoxClick={() => {}}
                />
            ) : (
                <ProfileItem image={company.profile} value={company.uuid} isActive={value === selectGroupValue} />
            )}
        </SelectGroup.Item>
    );
};

export default CompanyItem;
