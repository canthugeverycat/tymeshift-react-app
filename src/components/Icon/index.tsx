import React, { MouseEvent } from 'react';

import Close from './svg/Close.svg';
import Edit from './svg/Edit.svg';
import Timezone from './svg/Timezone.svg';
import Users from './svg/Users.svg';
import Views from './svg/Views.svg';

interface Props {
    className?: string,
    type: string,
    size?: string
    margin?: string,
    onClick?: (e: MouseEvent) => void;
}

const Icons: any = {
    Close,
    Edit,
    Timezone,
    Users,
    Views
};

export const Icon: React.FC<Props> = ({ className, type, onClick }) => (
    <i className={className} onClick={onClick}>
        <img
            src={Icons[type]}
            alt={type}
        />
    </i>
);
