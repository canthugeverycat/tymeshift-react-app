import styled, {css} from 'styled-components';
import { colors } from '../../utils/variables.styles';
import { pulseAnimation } from '../../utils/animations.styles';
import { Props } from './types';

export const StyledIcon = styled.i<Props>`
    display: flex;
    margin-right: 5px;
    position: relative;

    & > img {
        pointer-events: none;
        z-index: 1;
        opacity: 0.3;
        height: ${({ size }) => size || '14px' };
        width: ${({ size }) => size || '14px' };
    }

    ${({ onClick }) => onClick && css`
        &:before {
            content: "";
            display: inline-block;
            height: 100%;
            width: 100%;
            padding: 6px;
            background: ${colors.white};
            position: absolute;
            border-radius: 50%;
            left: -6px;
            top: -6px;
            cursor: pointer;
        }

        &:hover:before {
            animation: ${pulseAnimation} 2s infinite;
        }
    `}
`;
