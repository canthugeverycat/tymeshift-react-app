import styled from 'styled-components';
import { Text } from './index';
import { fontSizes, colors } from '../../utils/global.styles';

export default styled(Text)`
    display: flex;
    align-items: center;
    color: ${({ color }) => colors[color || 'darkText'] };
    font-size: ${({ size }) => fontSizes[size || 'small'] };
    font-weight: ${({ weight }) => weight || '500' };
    margin: ${({ margin }) => margin || '0' };
`;