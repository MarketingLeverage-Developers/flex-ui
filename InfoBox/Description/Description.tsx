import styles from './Description.module.scss';

type DescriptionProps = {
    children: React.ReactNode;
};

const Description = ({ children }: DescriptionProps) => {
    return <div className={styles.Description}>{children}</div>;
};

export default Description;
