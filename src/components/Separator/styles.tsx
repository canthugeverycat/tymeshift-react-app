import styled from 'styled-components';

import { colors } from '../../styleUtils/variables.styles';
import { Props } from './types';

export const StyledSeparator = styled.div<Props>`
    display: block;
    width: ${({ direction, length }) => 
        direction === 'vertical' ? '1px' : length || '100%'
    };
    height: ${({ direction, length }) =>
        direction === 'vertical' ? length || '100%' : '1px'
    };
    margin: ${({ margin }) => margin || '0' };

    background-color: ${colors.grey};
`;
