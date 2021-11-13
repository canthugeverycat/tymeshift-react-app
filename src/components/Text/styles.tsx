import styled from 'styled-components';
import { Text } from './index';
import { fontSizes, colors, fontWeights } from '../../utils/global.styles';

export default styled(Text)`
    color: ${({ color }) => colors[color || 'primary'] };
    font-size: ${({ size }) => fontSizes[size || 'small'] };
    font-weight: ${({ weight }) => fontWeights[weight || 'regular'] };
`;