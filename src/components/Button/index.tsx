import React from 'react';

import { StyledButton } from './styles';
import { Props } from './types';

const Button: React.FC<Props> = ({ children, ...props }) => (
	<StyledButton {...props}>{children}</StyledButton>
);

export default Button;
