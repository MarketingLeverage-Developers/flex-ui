import { useSidebar } from '../CompanySidebar';
import styles from './OpenButton.module.scss';
import { FaUser } from 'react-icons/fa';

const OpenButton = () => {
    const { setIsOpen } = useSidebar();

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    return (
        <div className={styles.OpenButton}>
            <FaUser onClick={handleButtonClick} />
        </div>
    );
};

export default OpenButton;
