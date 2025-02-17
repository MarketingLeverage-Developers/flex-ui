/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return (
        <div
            css={css`
                width: 100%;
            `}
        >
            {children}
        </div>
    );
};

export default Main;
