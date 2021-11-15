import React from 'react';

import { StyledSeparator } from './styles';
import { Props } from './types';

const Separator: React.FC<Props> = ({ children, ...props }) => (
    <StyledSeparator {...props}>{children}</StyledSeparator>
);

export default Separator;
