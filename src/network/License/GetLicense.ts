import {rest} from '../axios'
import {LicenseProps} from 'Components/types/LicenseTypes'

const getLicense = async (): Promise<LicenseProps[]> => {
    const url = "/license";
    //try{
        const {data} = await rest.get<LicenseProps[]>(url)
        return data;
    //}catch(error){
    //    throw new Error('error');
    //}
}

export {getLicense};
