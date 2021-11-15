import styled from 'styled-components';

import { fontSizes, colors } from '../../styleUtils/variables.styles';
import { Props } from './types';

export const StyledText = styled.p<Props>`
    display: flex;
    align-items: center;
    margin: ${({ margin }) => margin || '0' };

    color: ${({ color }) => colors[color || 'darkText'] };
    font-size: ${({ size }) => fontSizes[size || 'small'] };
    font-weight: ${({ weight }) => weight || '500' };
`;
