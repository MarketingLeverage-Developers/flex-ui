import newStyled from '@emotion/styled';
import React from 'react';

const Wrapper = newStyled.aside<{ sidebarWidth: string; sidebarMaxWidth: string }>`
  grid-area: sidebar;
  background: rgb(249, 250, 250);
  margin: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  /* 기본 상태: 부모 grid-template-columns의 첫 번째 열(클램프 값)을 그대로 채움 */
  width: 100%;
  border-right: 1px solid ${(props) => props.theme?.colors?.black?.black010 || '#e0e0e0'};

  @media (max-width: 1280px) {
    /* 내부 콘텐츠 크기에 따라 너비가 결정되도록 */
    width: fit-content;
    justify-self: start;
  }

`;

type SidebarProps = {
    children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
    return (
        <Wrapper sidebarWidth="20%" sidebarMaxWidth="292px">
            {children}
        </Wrapper>
    );
};

export default Sidebar;
