import React, { MouseEvent } from 'react';

import { colors } from '../../utils/global.styles';

interface Props {
    className?: string;
    onClick?: (e: MouseEvent) => void;
    color: keyof typeof colors;
};

export const Button:React.FC <Props> = ({ className, onClick, children }) => {
    return (
       <button className={className} onClick={onClick}>{children}</button>
    )
};
