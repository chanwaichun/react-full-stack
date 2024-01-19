import http from "@/http/index";

const prefix = "/api/user";
export const login = (params: any) => {
	return http.post(prefix + "/login", params, { headers: { noLoading: true } });
};
export const register = (params: any) => {
	return http.post(prefix + "/addOrUpdate", params, { headers: { noLoading: true } });
};
export const getUserInfo = (params: any) => {
	return http.get(prefix + "/info", params, { headers: { noLoading: true } });
};
export const getUserList = (params: any) => {
	return http.get(prefix + "/get/list", params, { headers: { noLoading: true } });
};

export const upload = (params: any, headers: any) => {
	return http.post(prefix + "/upload", params, { headers: { "Content-Type": "multipart/form-data;charset=UTF-8" } });
};
