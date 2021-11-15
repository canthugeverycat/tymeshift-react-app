import styled from 'styled-components';

import { colors } from '../../styleUtils/variables.styles';

export const StyledBackdrop = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    background: ${colors.black};

    z-index: 2;
    opacity: 0.6;
`;

export const StyledModal = styled.div`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    flex-direction: column;
    width: 440px;
    padding: 16px 25px 0 25px;

    background: ${colors.white};
    
    border-radius: 2px;

    z-index: 2;
    transform: translate(-50%, -50%);
    box-shadow: 0px 8px 16px -4px rgba(0,17,34,0.2);

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
