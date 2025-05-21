import Header from './Header/Header';
import Main from './Main/Main';
import styles from './LoginLayout.module.scss';

type LoginLayoutProps = {
    children: React.ReactNode;
};

const LoginLayout = ({ children }: LoginLayoutProps) => {
    return <div className={styles.LoginLayout}>{children}</div>;
};

export default LoginLayout;

LoginLayout.Header = Header;
LoginLayout.Main = Main;
