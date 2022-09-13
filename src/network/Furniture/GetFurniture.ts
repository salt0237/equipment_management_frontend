import {rest} from '../axios'
import {FurnitureProps} from 'Components/types/FurnitureTypes'
import { EqualizerSharp } from '@mui/icons-material';

const getFurniture = async (): Promise<FurnitureProps[]> => {
    const url = "/furniture/";
        const {data} = await rest.get<FurnitureProps[]>(url);
        return data;
}

export {getFurniture};
