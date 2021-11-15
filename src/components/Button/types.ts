import { MouseEvent } from 'react';

import { colors } from '../../utils/variables.styles';

export interface Props {
	className?: string;
	onClick?: (e: MouseEvent) => void;
	color: keyof typeof colors;
};
