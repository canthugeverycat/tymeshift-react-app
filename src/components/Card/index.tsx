import React from 'react';
import Moment from 'react-moment';
import Text from '../Text/styles';
import Icon from '../Icon/styles';

import { Location } from '../../mock/data';

interface Props {
    className?: string;
    data: Location;
    onEditClick: (data: Location) => void;
};

export const Card:React.FC <Props> = ({
    className,
    data,
    onEditClick
}) => {
    const {
        createdAt,
        name,
        userCount,
    } = data;
    return (
        <div className={className}>
            <Text size="large" weight="700" margin="0 0 10px 0">{name}</Text>
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

            <Icon className="IconEdit" type="Edit" onClick={() => { onEditClick(data) }} />
        </div>
    )
};
