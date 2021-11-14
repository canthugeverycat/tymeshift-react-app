import styled from 'styled-components';
import { Button } from './index';
import { colors } from '../../utils/global.styles';
import { pulseAnimationGreen } from '../../utils/animations.styles';

export default styled(Button)`
    display: inline-block;
    color: ${colors.white};
    font-weight: 600;
    padding: 9px 15px;
    border-radius: 16px;
    background-color: ${({ color }) => colors[color]};
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        animation: ${pulseAnimationGreen} 2s infinite;
    }
`;
