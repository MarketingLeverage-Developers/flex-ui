import React from 'react';
import styles from './FixedSidebar.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import Portal from '@/headless/Portal/Portal';
import Header from '../Header/Header';
import CompanyItem from '../Companytem/CompanyItem';
import { useSidebar } from '../CompanySidebar';

type FixedMenuProps = {
    companies: any[];
    selectedCompany: any;
    onCompanyClick: (value: SelectGroupValue) => void;
};

const FixedSidebar = ({ companies, selectedCompany, onCompanyClick }: FixedMenuProps) => {
    const { isOpen } = useSidebar();

    return (
        <>
            {isOpen && (
                <Portal>
                    <div className={styles.FixedSidebar}>
                        <Header image={selectedCompany.profile} text={selectedCompany.companyName} fixed />
                        {companies.map((company) => {
                            return (
                                <CompanyItem
                                    value={company.uuid}
                                    fixed
                                    company={company}
                                    onSelectGroupItemClick={onCompanyClick}
                                />
                            );
                        })}
                    </div>
                </Portal>
            )}
        </>
    );
};

export default FixedSidebar;
