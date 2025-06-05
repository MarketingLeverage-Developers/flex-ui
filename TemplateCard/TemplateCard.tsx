import styles from './TemplateCard.module.scss';
import { Tag } from '@/types/model/tag';

type TemplateCardProps = {
    image: string;
    title: string;
    subTitle: string;
    tags: Tag[];
    onCardClick: () => void;
    children?: React.ReactNode;
};

const TemplateCard = ({ image, title, subTitle, tags, onCardClick, children }: TemplateCardProps) => {
    const imageComp = children;

    return (
        <div className={styles.TemplateCard} onClick={onCardClick}>
            {imageComp ?? <Image image={image} />}
            <div className={styles.Texts}>
                <span className={styles.Title}>
                    {title} <span className={styles.Number}>(45)</span>
                </span>
                <span className={styles.SubTitle}>{subTitle}</span>
                <div className={styles.Tags}>
                    {tags.map(({ id, name }) => (
                        <span key={id} className={styles.Tag}>
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TemplateCard;

const Image = ({ image }: { image: string }) => {
    return (
        <div className={styles.Image}>
            <img src={image} alt="템플릿 이미지" />
        </div>
    );
};

TemplateCard.Image = Image;
