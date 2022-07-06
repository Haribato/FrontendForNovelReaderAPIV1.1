import axios from "axios";
import { getCookie } from 'typescript-cookie';

export const API_URL = 'http://127.0.0.1:8000/'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use(
    (config) =>{
        const authToken = getCookie("auth_token");

        if (authToken){
            // @ts-ignore
            config.headers.authorization = authToken.toString();
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default $api