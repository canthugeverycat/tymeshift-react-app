import { Location } from '../../types';

export interface Props {
    show: boolean;
    data: Location | null;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};
