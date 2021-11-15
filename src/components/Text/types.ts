import { colors, fontSizes } from '../../styleUtils/variables.styles';

export interface Props {
    className?: string;
    color?: keyof typeof colors;
    size?: keyof typeof fontSizes;
    weight?: string;
    margin?: string;
};
