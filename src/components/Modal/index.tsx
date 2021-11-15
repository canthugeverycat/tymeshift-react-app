import React, { useCallback, useEffect } from 'react';
import Moment from 'react-moment';

import Text from '../Text';
import Icon from '../Icon';
import Button from '../Button';
import {
    StyledBackdrop,
    StyledModal,
    StyledModalHeader,
    StyledModalFooter
} from './styles';
import { Props } from './types';

const Modal: React.FC<Props> = ({ className, show, setShowModal, data }) => {

    const handleKeyPress = useCallback(
        (e) => {
            if (e === 'Escape' && show) {
                setShowModal(false);
            }
        },
        [show, setShowModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', handleKeyPress);

            return () => document.removeEventListener('keydown', handleKeyPress);
        },
        [handleKeyPress]
    );

    if (!show || data === null) {
        return null;
    }

    const { name, userCount, createdAt, views, description } = data;

    const closeModal = () => {
        setShowModal(false);
    };

    const viewsLabel = `${views} View${views !== 1 ? 's' : ''}`;

    return (
        <>
            <StyledBackdrop onClick={closeModal} />

            <StyledModal className={className}>
                <StyledModalHeader>
                    <Text size="large" weight="700">
                        {name}
                    </Text>
                    <Icon className="IconClose" type="Close" onClick={closeModal} />
                </StyledModalHeader>

                <Text margin="5px 0">
                    <Icon type="Users" />
                    {userCount} Users
                </Text>
                <Text margin="5px 0">
                    <Icon type="Timezone" />
                    <Moment local format="HH:mm [(GMT]Z[)]">
                        {createdAt}
                    </Moment>
                </Text>
                <Text margin="5px 0">
                    <Icon type="Views" />
                    {viewsLabel}
                </Text>
                <Text margin="20px 0 5px 0" weight="600">
                    Description
                </Text>
                <Text margin="5px 0" weight="400">
                    {description}
                </Text>
                
                <StyledModalFooter>
                    <Button color="green" onClick={closeModal}>
                        Done
                    </Button>
                </StyledModalFooter>
            </StyledModal>
        </>
    );
}

export default Modal;
