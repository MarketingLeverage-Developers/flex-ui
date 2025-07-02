import styles from './DynamicMenu.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import Header from '../Header/Header';
import { Company } from '@/types/model/company';
import CompanyItem from '@/headful/CompanySidebar/Companytem/CompanyItem';

type DynamicMenuProps = {
    companies: Company[];
    selectedCompany: Company;
    onCompanyClick: (value: SelectGroupValue) => void;
};

const DynamicMenu = ({ companies, selectedCompany, onCompanyClick }: DynamicMenuProps) => {
    return (
        <>
            <Header image={selectedCompany.profile} text={selectedCompany.companyName} />
            <div className={styles.DynamicMenu}>
                {companies.map((company) => {
                    return (
                        <CompanyItem value={company.uuid} company={company} onSelectGroupItemClick={onCompanyClick} />
                    );
                })}
            </div>
        </>
    );
};

export default DynamicMenu;
