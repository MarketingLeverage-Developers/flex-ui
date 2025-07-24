import styles from './DynamicMenu.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import Header from '../Header/Header';
import CompanyItem from '@/headful/CompanySidebar/Companytem/CompanyItem';

type DynamicMenuProps = {
    companies: any[];
    selectedCompany: any;
    onCompanyClick: (value: SelectGroupValue) => void;
};

const DynamicMenu = ({ companies, selectedCompany, onCompanyClick }: DynamicMenuProps) => {
    return (
        <>
            <Header image={selectedCompany.profile} text={selectedCompany.companyName} />
            <div className={styles.DynamicMenu}>
                {companies.map((company) => {
                    return (
                        <CompanyItem key={company.uuid} value={company.uuid} company={company} onSelectGroupItemClick={onCompanyClick} />
                    );
                })}
            </div>
        </>
    );
};

export default DynamicMenu;
