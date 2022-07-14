import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const DEFALUTS_API_CONFIG: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_SERVER_HOST,
    timeout: 5000,
    headers: {
        ContentType: "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    proxy: {
        protocol: "http",
        host: "10.10.153.220",
        port: 3000,
    },
};

const instance = axios.create(DEFALUTS_API_CONFIG);

instance.interceptors.request.use((config:any) => {
    if (
        Cookies.get("_access_token") &&
        Cookies.get("_client") &&
        Cookies.get("_uid")
    ) {
        config.headers = {
            "access-token": Cookies.get("_access_token") as string,
            client: Cookies.get("_client") as string,
            uid: Cookies.get("_uid") as string,
        };
    }
    return config;
});

export default instance;
