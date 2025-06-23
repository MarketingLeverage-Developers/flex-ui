import styles from './SummaryCard.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';

type SummaryCardProps = {
    color?: HexColor;
    text: string;
    count: number;
    icon: string;
};

const SummaryCard = ({ color, text, count, icon }: SummaryCardProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    // count를 최소 두 자리 문자열로 포맷
    const formattedCount = String(count).padStart(2, '0');

    return (
        <div className={styles.SummaryCard} style={{ ...cssVariables }}>
            <div className={styles.Circle}>
                <img src={icon} alt="요약 아이콘" />
            </div>
            <div className={styles.Text}>
                <span className={styles.Title}>{text}</span>
                <span className={styles.Number}>{formattedCount}</span>
            </div>
        </div>
    );
};

export default SummaryCard;
