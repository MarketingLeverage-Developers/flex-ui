import newStyled from '@emotion/styled';
import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

const Container = newStyled.div<{ sidebarWidth: string; sidebarMaxWidth: string }>`
display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: clamp(200px, 20%, 292px) 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  margin: 0;
  padding: 0;

  @media (max-width: 1280px) {
    grid-template-columns: auto 1fr;
  }
`;

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Container sidebarWidth="20%" sidebarMaxWidth="292px">
            {children}
        </Container>
    );
};

export default Layout;

Layout.Header = Header;
Layout.Sidebar = Sidebar;
Layout.Main = Main;
