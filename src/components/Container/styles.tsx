import styled from 'styled-components';
import { Container } from './index';

export default styled(Container)`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'dark' };
    padding: ${({ padding }) => padding || '0' }
`;
