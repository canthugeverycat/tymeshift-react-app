import { Location } from '../../types';

export interface Props {
    className?: string;
    data: Location;
    handleOpenModal: (data: Location) => void;
};
