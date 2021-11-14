import React from 'react';
import Moment from 'react-moment';
import Text from '../Text/styles';
import Icon from '../Icon/styles';

type Location = {
    id: string,
    createdAt: string,
    name: string,
    userCount: number,
    description: string
}

interface Props {
    className?: string;
    data: Location;
    showDetails?: boolean
};

export const Card:React.FC <Props> = ({
    className,
    data: {
        createdAt,
        name,
        userCount,
    },
    showDetails
}) => {
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

            {!showDetails && <Icon className="IconEdit" type="Edit" onClick={() => { console.log('clicked')}} />}
        </div>
    )
};
