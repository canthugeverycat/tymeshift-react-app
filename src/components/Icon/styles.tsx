import styled, {css} from 'styled-components';
import { Icon } from './index';
import { colors } from '../../utils/global.styles';
import { pulseAnimation } from '../../utils/animations.styles';

export default styled(Icon)`
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
        }

        &:hover:before {
            cursor: pointer;
            animation: ${pulseAnimation} 2s infinite;
        }
    `}
`;
