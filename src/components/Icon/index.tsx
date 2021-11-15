import React from 'react';

import Close from './svg/Close.svg';
import Edit from './svg/Edit.svg';
import Timezone from './svg/Timezone.svg';
import Users from './svg/Users.svg';
import Views from './svg/Views.svg';

import { StyledIcon } from './styles';
import { Props } from './types';

const Icons: any = {
    Close,
    Edit,
    Timezone,
    Users,
    Views
};

const Icon: React.FC<Props> = (props) => {
    const { type } = props;

    return (
        <StyledIcon {...props}>
            <img
                src={Icons[type]}
                alt={type}
            />
        </StyledIcon>
    );
};

export default Icon;
