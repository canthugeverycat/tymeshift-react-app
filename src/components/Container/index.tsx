import React from 'react';

import { StyledContainer } from './styles';
import { Props } from './types';

const Container: React.FC<Props> = ({ children, ...props }) => (
    <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
