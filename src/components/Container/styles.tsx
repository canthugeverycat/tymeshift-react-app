import styled from 'styled-components';
import { Props } from './types';

export const StyledContainer = styled.div<Props>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ direction }) => direction || 'row' };
    padding: ${({ padding }) => padding || '0' };
`;
