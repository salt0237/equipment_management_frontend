import axios, {AxiosResponse} from 'axios'

type Data = { [key: string]: string | number | boolean | object }

const rest = (() => {
    const options = axios.create({
        baseURL: 'http://10.10.153.220:3000/api/v1',
        timeout: 15000,
    });
    return{
        options,
        get: <T = any, R = AxiosResponse<T>>(url: string): Promise<R> => {
            return options.get(url);
        },
        post: <T = any, R= AxiosResponse<T>>(url: string, data: Data):Promise<R> => {
            return options.post(url,data);
        },
        delete: <T = any, R= AxiosResponse<T>>(url: string): Promise<R> => {
            return options.delete(url+"id");
        }
    }
})();

export {rest};
