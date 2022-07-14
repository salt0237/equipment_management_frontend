import {rest} from '../axios'
import {ConsumableProps} from 'Components/types/ConsumableTypes'

const getConsumable = async (): Promise<ConsumableProps[]> => {
    const url = "/consumable";
        const {data} = await rest.get<ConsumableProps[]>(url)
        return data;
}

export {getConsumable};