import styled from 'styled-components';

import { colors } from '../../styleUtils/variables.styles';
import { pulseAnimationGreen } from '../../styleUtils/animations.styles';
import { Props } from './types';

export const StyledButton = styled.button<Props>`
    display: inline-block;
    padding: 9px 15px;

    background-color: ${({ color }) => colors[color]};
    color: ${colors.white};
    font-weight: 600;

    border-radius: 16px;
    border: none;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
        animation: ${pulseAnimationGreen} 2s infinite;
    }
`;
