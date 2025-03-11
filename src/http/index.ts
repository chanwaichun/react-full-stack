import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {message} from "antd";
import {loginOut} from "@/reducer/user";
import store from "@/store";

const config = {
	baseURL: "/",
	// 设置超时时间（30s）
	timeout: 30000
};

class RequestHttp {
	service: AxiosInstance;

	constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config);
		// console.log(config);
		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				const {token} = store.getState().user;
				if (config.headers["Content-Type"]) {
					config.headers.set("Content-Type", config.headers["Content-Type"]);
				}
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
				if (response.data.code === 200) {
					return response.data;
				}
				const responseData = response.data;
				if (response.data.code === 401) {
					store.dispatch(loginOut());
					window.location.href = "/#/user/login";
					message.error(responseData.msg);
					return Promise.reject(responseData);
				} else {
					const errorType = Object.prototype.toString.call(responseData);
					if (errorType === "[object Object]") {
						message.error(responseData.msg);
					}
					return Promise.reject(responseData);
				}
			},
			async (error: any) => {
				const responseData = error.response.data;
				const errorType = Object.prototype.toString.call(responseData);
				if (errorType === "[object Object]") {
					message.error(responseData.msg);
				}
				return Promise.reject(responseData);
			}
		);
	}

	get(url: string, params?: object, _object = {}): Promise<any> {
		return this.service.get(url, {params, ..._object});
	}

	post(url: string, params?: object, _object = {}): Promise<any> {
		return this.service.post(url, params, _object);
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RequestHttp(config);
