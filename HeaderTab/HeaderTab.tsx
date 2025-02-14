/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type HeaderTabProps = {
    children: React.ReactNode;
};

const HeaderTab = ({ children }: HeaderTabProps) => {
    const headerTabStyle = css`
        padding: 30px 40px;
        font-size: 28px;
        font-weight: 700;
        color: #324449;
    `;

    return <div css={headerTabStyle}>{children}</div>;
};

export default HeaderTab;
