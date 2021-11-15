import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

import Text from '../Text';
import Icon from '../Icon';
import { StyledCard } from './styles';
import { Props } from './types';

const Card: React.FC<Props> = (props) => {
	const { data, handleOpenModal } = props;
	const { name, createdAt, userCount } = data;

	const [views, setViews] = useState(0);

	useEffect(() => {
		if (views) {
			handleOpenModal({ ...data, views });
		}
	}, [views]);

	const viewsLabel = `${views} View${views !== 1 ? 's' : ''}`;

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
				{viewsLabel}
			</Text>

			<Icon
				className="IconEdit"
				type="Edit"
				onClick={() => setViews((prev) => prev + 1)}
			/>
		</StyledCard>
	);
};

export default Card;
