const InheritInput = ({
    updatable,
    disabled,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { updatable?: boolean }) => {
    return (
        <input
            disabled={disabled}
            {...props}
            style={{
                // 기본 스타일 제거
                all: 'unset',

                // ✅ 기존 텍스트 스타일을 명시적으로 복원
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '20px',
                fontFamily: 'inherit',

                // ✅ layout 영향 방지
                display: 'inline-block',
                boxSizing: 'border-box',

                // ✅ 너비 및 밑줄
                width: '100%',
                borderBottom: updatable && !disabled ? '1px dotted #ccc' : 'none',
                paddingBottom: updatable && !disabled ? '1px' : 0,

                // ✅ 사용자 경험
                backgroundColor: 'transparent',
                color: disabled ? '#999' : 'inherit',
                cursor: disabled ? 'not-allowed' : updatable ? 'text' : 'default',
                opacity: disabled ? 0.6 : 1,

                ...props.style,
            }}
        />
    );
};

export default InheritInput;
