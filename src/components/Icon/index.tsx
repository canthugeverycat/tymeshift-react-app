import { FunctionComponent } from 'react';
import styled from 'styled-components';

import Close from './svg/Close.svg';
import Edit from './svg/Edit.svg';
import Timezone from './svg/Timezone.svg';
import Users from './svg/Users.svg';
import Views from './svg/Views.svg';

import { Props } from './index.types';

const Icons: any = {
    Close,
    Edit,
    Timezone,
    Users,
    Views
};

const Img = styled.img`
    height: 14px;
    width: 14px;
`;

const Icon: FunctionComponent<Props> = ({ type }) => (
    <Img
        className="Icon"
        src={Icons[type]}
        alt={type}
    />
);

export default Icon;
