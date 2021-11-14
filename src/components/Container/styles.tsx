import styled from 'styled-components';
import { Container } from './index';

export default styled(Container)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ direction }) => direction || 'row' };
    padding: ${({ padding }) => padding || '0' };
`;
