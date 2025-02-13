import newStyled from '@emotion/styled';
import React from 'react';

const Wrapper = newStyled.header`
  grid-area: header;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black.black010};
        /* 고정 높이 대신 내부 내용에 따라 높이가 결정됨 */
height: auto;
    background: #fff;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

type HeaderProps = {
    children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Header;
