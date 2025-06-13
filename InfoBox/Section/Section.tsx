import styles from './Seciton.module.scss';

type SectionProps = {
    children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
    return <div className={styles.Section}>{children}</div>;
};

export default Section;
