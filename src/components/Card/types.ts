import { Location } from '../../mock/data';

export interface Props {
    className?: string;
    data: Location;
    onEditClick: (data: Location) => void;
};
