import styled from 'styled-components';

import { colors } from '../../utils/global.styles';

import { Props } from './types';

export const StyledSeparator = styled.div<Props>`
    display: block;
    margin: ${({ margin }) => margin || '0' };
    background-color: ${colors.grey};
    width: ${({ direction, length }) => direction === 'vertical' ? '1px' : length || '100%' };
    height: ${({ direction, length }) => direction === 'vertical' ? length || '100%' : '1px' };
`;
