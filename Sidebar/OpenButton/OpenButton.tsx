import { useSidebar } from '../Sidebar';
import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './OpenButton.module.scss';

const OpenButton = () => {
    const { setIsOpen } = useSidebar();

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    return (
        <div className={styles.OpenButton}>
            <RxHamburgerMenu onClick={handleButtonClick} />
        </div>
    );
};

export default OpenButton;
