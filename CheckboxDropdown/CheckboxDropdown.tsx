import { BoxSize, ContentSize, HexColor } from '@/ui-kit/src/types';
import classNames from 'classnames';
import React from 'react';
import styles from './CheckboxDropdown.module.scss';
import { dimensionToVariable } from '@/ui-kit/src/utils';
import Trigger from './Trigger/Trigger';
import Content from './Content/Content';
import Item from './Item/Item';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import Dropdown from '@/headless/Dropdown/Dropdown';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import CheckboxGroup from '@/headless/CheckboxGroup/CheckboxGroup';

export interface CheckboxDropdownContextType {
    size: ContentSize;
    disabled?: boolean;
}

const CheckboxDropdownContext = React.createContext<CheckboxDropdownContextType | undefined>(undefined);

export const useCheckboxDropdownContext = () => {
    const context = React.useContext(CheckboxDropdownContext);
    if (!context) {
        throw new Error('useCheckBoxDropdownContext muset be used within a CheckboxDropdownProvider');
    }
    return context;
};

type CheckboxDropdownProps = {
    children: React.ReactNode;
    defaultValue: string[];
    size?: ContentSize;
    bgColor?: HexColor;
    width?: BoxSize | string;
    full?: boolean;
    disabled?: boolean;
};

const CheckboxDropdown = ({
    children,
    defaultValue,
    width,
    bgColor = '#fff',
    size = 'md',
    disabled = false,
    full,
}: CheckboxDropdownProps) => {
    const combinedStyle = classNames(styles.Box, {
        [styles.Full]: full,
    });

    const cssVariables: React.CSSProperties = {
        '--width': dimensionToVariable(width),
        '--background-color': bgColor,
    } as React.CSSProperties;

    return (
        <CheckboxDropdownContext.Provider value={{ size, disabled }}>
            <CheckboxGroup defaultValue={defaultValue}>
                <Dropdown>
                    <Dropdown.Box className={combinedStyle} style={cssVariables}>
                        {children}
                    </Dropdown.Box>
                </Dropdown>
            </CheckboxGroup>
        </CheckboxDropdownContext.Provider>
    );
};

export default CheckboxDropdown;

CheckboxDropdown.Trigger = Trigger;
CheckboxDropdown.Content = Content;
CheckboxDropdown.Item = Item;
