import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import styles from './ColorChip.module.scss';

type ColorChipProps = {
    color: HexColor;
    bgColor: HexColor;
    text: string;
    style?: React.CSSProperties;
};

const ColorChip = ({ color, bgColor, text }: ColorChipProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--background-color': bgColor,
    };

    return (
        <div className={styles.ColorChip} style={{ ...cssVariables }}>
            {text}
        </div>
    );
};

export default ColorChip;
