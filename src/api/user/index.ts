import http from '@/http/index'

const prefix = '/api/user'
export const login = (params: any) => {
    return http.post(prefix + "/login", params, {headers: {noLoading: true}});
};
export const register = (params: any) => {
    return http.post(prefix + "/addOrUpdate", params, {headers: {noLoading: true}});
}
