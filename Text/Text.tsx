import React from 'react';

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    children: React.ReactNode;
};

const Text = ({ fontSize, fontWeight, color, textAlign, children, ...props }: TextProps) => {
    const inlineStyle: React.CSSProperties = {
        fontSize: `${fontSize ?? 16}px`,
        fontWeight: fontWeight ?? 400,
        color: color ?? '#324449',
        textAlign: textAlign ?? 'left',
    };

    const combinedStyle: React.CSSProperties = { ...props.style, ...inlineStyle };

    return (
        <div {...props} style={combinedStyle}>
            {children}
        </div>
    );
};

export default Text;
