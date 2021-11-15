import styled, {css} from 'styled-components';

import { colors } from '../../styleUtils/variables.styles';
import { pulseAnimation } from '../../styleUtils/animations.styles';
import { Props } from './types';

export const StyledIcon = styled.i<Props>`
    display: flex;
    position: relative;
    margin-right: 5px;

    & > img {
        height: ${({ size }) => size || '14px' };
        width: ${({ size }) => size || '14px' };
        
        opacity: 0.3;
        z-index: 1;
        pointer-events: none;
    }

    ${({ onClick }) => onClick && css`
        &:before {
            content: "";
            display: inline-block;
            position: absolute;
            left: -6px;
            top: -6px;
            height: 100%;
            width: 100%;
            padding: 6px;
            
            background: ${colors.white};
            
            border-radius: 50%;

            cursor: pointer;
        }

        &:hover:before {
            animation: ${pulseAnimation} 2s infinite;
        }
    `}
`;
