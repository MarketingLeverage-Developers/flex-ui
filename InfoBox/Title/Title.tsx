import styles from './Title.module.scss';
import { IoMdInformationCircle } from 'react-icons/io';

type TitleProps = {
    text: string;
};

const Title = ({ text }: TitleProps) => {
    return (
        <div className={styles.Title}>
            <IoMdInformationCircle />
            {text}
        </div>
    );
};

export default Title;
