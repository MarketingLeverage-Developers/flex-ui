/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Main from './Main';

type CenterLayoutProps = {
    children: React.ReactNode;
};

const CenterLayout = ({ children }: CenterLayoutProps) => {
    const centerLayoutStyle = css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    `;

    return <div css={centerLayoutStyle}>{children}</div>;
};

export default CenterLayout;

CenterLayout.Main = Main;
