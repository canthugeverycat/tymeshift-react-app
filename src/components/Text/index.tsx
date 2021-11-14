import React from 'react';
import { colors, fontSizes } from '../../utils/global.styles';

interface Props {
    className?: string;
    color?: keyof typeof colors;
    size?: keyof typeof fontSizes;
    weight?: string;
    margin?: string;
};

export const Text:React.FC <Props> = ({ className, children }) => {
    return (
       <p className={className}>{children}</p>
    )
};
