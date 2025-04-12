import http from "@/http/index";

const prefix = "/api/zitie";
export const addMessage = (params: any) => {
	return http.post(prefix + "/addMessage", params, {headers: {noLoading: true}});
};
