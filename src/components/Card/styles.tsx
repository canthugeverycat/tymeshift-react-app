import styled from 'styled-components';
import { Card } from './index';
import { colors } from '../../utils/global.styles';

export default styled(Card)`
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 0 0 calc(20% - 25px);
    margin: 12.5px;
    padding: 15px 25px;
    background-color: ${colors.lightGrey};
    border-radius: 2px;
    outline: 1px solid ${colors.grey};

    & .IconEdit {
        display: none;
        position: absolute;
        top: 13px;
        right: 13px;
    }

    &:hover {
        background-color: ${colors.grey};

        & .IconEdit {
            display: flex;
        }
    }
`;
