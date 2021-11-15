import { colors, fontSizes } from '../../utils/variables.styles';

export interface Props {
    className?: string;
    color?: keyof typeof colors;
    size?: keyof typeof fontSizes;
    weight?: string;
    margin?: string;
};
