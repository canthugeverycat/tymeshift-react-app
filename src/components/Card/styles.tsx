import styled from 'styled-components';

import { colors } from '../../styleUtils/variables.styles';

export const StyledCard = styled.div`
    position: relative;
    display: flex;
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
