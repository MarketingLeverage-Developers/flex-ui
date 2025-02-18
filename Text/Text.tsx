/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    children: React.ReactNode;
};

const Text = ({ fontSize, fontWeight, color, textAlign, children, ...props }: TextProps) => {
    const textStyle = css`
        font-size: ${fontSize ?? 16}px;
        font-weight: ${fontWeight ?? 400};
        color: ${color ?? '#324449'};
        text-align: ${textAlign ?? 'left'};
    `;

    return (
        <div {...props} css={textStyle}>
            {children}
        </div>
    );
};

export default Text;
