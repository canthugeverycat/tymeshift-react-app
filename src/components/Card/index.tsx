import React from 'react';
import Moment from 'react-moment';

import Text from '../Text';
import Icon from '../Icon';
import { StyledCard } from './styles';
import { Props } from './types';

const Card: React.FC<Props> = (props) => {
	const { data, onEditClick } = props;
	const { name, createdAt, userCount } = data;

	return (
		<StyledCard {...props}>
			<Text size="large" weight="700" margin="0 0 10px 0">
				{name}
			</Text>

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
				0 Views
			</Text>

			<Icon
				className="IconEdit"
				type="Edit"
				onClick={() => { onEditClick(data) }}
			/>
		</StyledCard>
	);
};

export default Card;
