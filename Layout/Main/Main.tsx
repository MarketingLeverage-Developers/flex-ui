import newStyled from '@emotion/styled';
import React from 'react';

const Wrapper = newStyled.main`
  grid-area: main;
  background: #fff;
  margin: 0;
  overflow-y: auto;
`;

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Main;
