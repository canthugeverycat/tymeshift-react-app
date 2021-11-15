import { MouseEvent } from 'react';

export interface Props {
    className?: string,
    type: string,
    size?: string
    margin?: string,
    onClick?: (e: MouseEvent) => void;
};
