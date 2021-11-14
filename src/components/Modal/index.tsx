import React from 'react';
import Moment from 'react-moment';

import { Location } from '../../mock/data';
import { ModalBackdrop } from './styles';
import Text from '../Text/styles';
import Icon from '../Icon/styles';
import Button from '../Button/styles';

interface Props {
    className?: string;
    show: boolean;
    data: Location | null;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};

export const Modal:React.FC<Props> = ({ className, show, setShowModal, data }) => {
    if (!show || data === null) {
        return null;
    }

    const {
        name,
        userCount,
        createdAt,
        description
    } = data;

    const closeModal = () => {
        setShowModal(false)
    };

    return (
        <>
            <ModalBackdrop onClick={closeModal} />

            <div className={className}>
                <div className="Modal-Header">
                    <Text size="large" weight="700">{name}</Text>
                    <Icon className="IconClose" type="Close" onClick={closeModal} />
                </div>
                <Text margin="5px 0">
                    <Icon type="Users" />
                    {userCount} Users
                </Text>
                <Text margin="5px 0">
                    <Icon type="Timezone" />
                    <Moment local format="HH:mm [(GMT]Z[)]">{createdAt}</Moment>
                </Text>
                <Text margin="5px 0">
                    <Icon type="Views" />
                    0 Views
                </Text>
                <Text margin="20px 0 5px 0" weight="600">Description</Text>
                <Text margin="5px 0" weight="400">
                    {description}
                </Text>
                
                <div className="Modal-Footer">
                    <Button color="green" onClick={closeModal}>
                        Done
                    </Button>
                </div>
            </div>
        </>
    );
}
