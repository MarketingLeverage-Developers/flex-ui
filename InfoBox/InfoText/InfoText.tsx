import styles from './InfoText.module.scss';

type InfoTextProps = {
    children: React.ReactNode;
};

const InfoText = ({ children }: InfoTextProps) => {
    return <div className={styles.InfoText}>{children}</div>;
};

export default InfoText;
