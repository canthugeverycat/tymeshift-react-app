import styled from 'styled-components';
import { colors } from '../../utils/variables.styles';

export const StyledBackdrop = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    background: ${colors.black};
    opacity: 0.6;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledModal = styled.div`
    width: 440px;
    padding: 16px 25px 0 25px;
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    box-shadow: 0px 8px 16px -4px rgba(0,17,34,0.2);
    z-index: 2;

    .Modal-Header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    .Modal-Footer {
        display: flex;
        justify-content: end;
        margin-top: 15px;
        padding: 10px 0;
    }
`;

export const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const StyledModalFooter = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 15px;
    padding: 10px 0;
`;
