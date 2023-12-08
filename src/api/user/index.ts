import http from '@/http/index'

export const login = (params: any) => {
    return http.post("api/user/login", params, {headers: {noLoading: true}});
};
