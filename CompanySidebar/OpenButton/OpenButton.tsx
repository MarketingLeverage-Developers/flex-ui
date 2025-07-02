import { useSidebar } from '../CompanySidebar';
import styles from './OpenButton.module.scss';
import { FaUser } from 'react-icons/fa';

type OpenButtonProps = {
    image: string | null;
    text: string;
};

const OpenButton = ({ image, text }: OpenButtonProps) => {
    const { setIsOpen } = useSidebar();

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    return (
        <div className={styles.OpenButton} onClick={handleButtonClick}>
            <div className={styles.Logo}>
                {image ? <img src={image} alt="회사 이미지" /> : <div className={styles.Default} />}
                <span>{text}</span>
            </div>
        </div>
    );
};

export default OpenButton;
