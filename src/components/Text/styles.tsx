import styled from 'styled-components';

import { fontSizes, colors } from '../../utils/variables.styles';
import { Props } from './types';

export const StyledText = styled.p<Props>`
    display: flex;
    align-items: center;
    color: ${({ color }) => colors[color || 'darkText'] };
    font-size: ${({ size }) => fontSizes[size || 'small'] };
    font-weight: ${({ weight }) => weight || '500' };
    margin: ${({ margin }) => margin || '0' };
`;
