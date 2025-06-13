import { usePagination } from '@/headless/Pagination/Pagination';
import styles from './TotalText.module.scss';

const TotalText = () => {
    const {
        paginationValue: { total },
    } = usePagination();

    return (
        <div className={styles.TotalText}>
            전체
            <span>{total}</span>건
        </div>
    );
};

export default TotalText;
