import Description from './Description/Description';
import styles from './InfoBox.module.scss';
import Section from './Section/Section';
import Title from './Title/Title';

type InfoBoxProps = {
    children: React.ReactNode;
};

const InfoBox = ({ children }: InfoBoxProps) => {
    return <div className={styles.InfoBox}>{children}</div>;
};

export default InfoBox;

InfoBox.Section = Section;
InfoBox.Title = Title;
InfoBox.Description = Description;
InfoBox.InfoText = InfoBox;
