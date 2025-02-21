import React from 'react';

type Spacing = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    padding?: Spacing | number;
    margin?: Spacing | number;
};

const Wrapper = ({ children, padding, margin, ...props }: WrapperProps) => {
    const computedPadding =
        typeof padding === 'number'
            ? `${padding}px`
            : `${padding?.top ?? 0}px ${padding?.right ?? 0}px ${padding?.bottom ?? 0}px ${padding?.left ?? 0}px`;

    const computedMargin =
        typeof margin === 'number'
            ? `${margin}px`
            : `${margin?.top ?? 0}px ${margin?.right ?? 0}px ${margin?.bottom ?? 0}px ${margin?.left ?? 0}px`;

    const inlineStyle: React.CSSProperties = {
        padding: computedPadding,
        margin: computedMargin,
    };

    return (
        <div {...props} style={inlineStyle}>
            {children}
        </div>
    );
};

export default Wrapper;
