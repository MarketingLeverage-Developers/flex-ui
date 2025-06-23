import styles from './TotalCountText.module.scss';

type TotalPagintaionTextProps = {
    count?: number;
};

const TotalCountText = ({ count }: TotalPagintaionTextProps) => {
    return (
        <div className={styles.TotalCountText}>
            전체
            <span>{count}</span>건
        </div>
    );
};

export default TotalCountText;
