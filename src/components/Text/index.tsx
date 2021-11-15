import React from 'react';

import { StyledText } from './styles';
import { Props } from './types';

const Text: React.FC<Props> = ({ children, ...props }) => (
    <StyledText {...props}>{children}</StyledText>
);

export default Text;
