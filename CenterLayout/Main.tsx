/** @jsxImportSource @emotion/react */
import React from 'react';

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return <div>{children}</div>;
};

export default Main;
