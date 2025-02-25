import Toggle, { useToggle } from 'headless/Toggle/Toggle';
import React from 'react';

type CheckToggleProps = {
    onToggleClick: (value: boolean) => void;
    defaultValue: boolean;
};

const CheckToggle = ({ onToggleClick, defaultValue }: CheckToggleProps) => {
    return (
        <Toggle defaultValue={defaultValue}>
            <CheckBox onToggleClick={onToggleClick} />
        </Toggle>
    );
};

export default CheckToggle;

const CheckBox = ({ onToggleClick }: { onToggleClick: (value: boolean) => void }) => {
    const { toggleValue, changeToggle } = useToggle();

    const handleCheckBoxClick = (value: boolean) => {
        onToggleClick(value);
        changeToggle();
    };

    console.log(toggleValue, 'toggleValue');

    return <input type="checkbox" checked={toggleValue} onClick={() => handleCheckBoxClick(toggleValue)} />;
};
