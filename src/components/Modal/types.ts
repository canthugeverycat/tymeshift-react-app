import { Location } from '../../types';

export interface Props {
    className?: string;
    show: boolean;
    data: Location | null;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};
