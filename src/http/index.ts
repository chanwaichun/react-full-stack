import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
import { loginOut } from "@/reducer/user";
import store from "@/store";
import { redirect } from "react-router-dom";

const config = {
	baseURL: process.env.BASE_URL,
	// 设置超时时间（30s）
	timeout: 30000
};

class RequestHttp {
	service: AxiosInstance;

	constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config);
		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				const { token } = store.getState().user;

				config.headers.Authorization = token ? "Bearer " + token : "";
				return config;
			},
			(error: AxiosError) => {
				console.log(error);
				return Promise.reject(error);
			}
		);
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				return response.data;
			},
			async (error: any) => {
				const responseData = error.response.data;
				const errorType = Object.prototype.toString.call(responseData);

				console.log(responseData);
				if (responseData.code === 401) {
					store.dispatch(loginOut());
					window.location.href = "/#/user/login";
				}
				if (errorType === "[object String]") {
					message.error(responseData);
				}
				if (errorType === "[object Object]") {
					message.error(responseData.msg);
				}
				return Promise.reject(responseData);
			}
		);
	}

	get(url: string, params?: object, _object = {}): Promise<any> {
		return this.service.get(url, { params, ..._object });
	}

	post(url: string, params?: object, _object = {}): Promise<any> {
		return this.service.post(url, params, _object);
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RequestHttp(config);
