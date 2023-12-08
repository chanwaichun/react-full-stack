import axios, {AxiosInstance, AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse} from "axios";
import {message} from "antd";

const config = {
    baseURL: process.env.BASE_URL,
    // 设置超时时间（30s）
    timeout: 30000,
};

class RequestHttp {
    service: AxiosInstance

    constructor(config: AxiosRequestConfig) {
        this.service = axios.create(config)
        this.service.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const localStorageToken = window.localStorage.getItem('token')
                if (localStorageToken) {
                    config.headers.Authorization = localStorageToken;
                }
                return config;
            },
            (error: AxiosError) => {
                console.log(error);
                return Promise.reject(error);
            }
        );
        this.service.interceptors.response.use((response: AxiosResponse) => {
            console.log(response)
            return response.data
        }, async (error: any) => {
            const responseData = error.response.data
            const errorType = Object.prototype.toString.call(responseData)

            if (errorType === '[object String]') {
                await message.error(responseData)

            }
            if (errorType === '[object Object]') {
                await message.error(responseData.msg)
            }
            return Promise.reject(responseData);
        })
    }

    get(url: string, params?: object, _object = {}): Promise<any> {
        // @ts-ignore
        return this.service.get(url, params, _object);
    }

    post(url: string, params?: object, _object = {}): Promise<any> {
        return this.service.post(url, params, _object);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RequestHttp(config)
