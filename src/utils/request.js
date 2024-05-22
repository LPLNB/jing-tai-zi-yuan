import axios from "axios"
import {message} from "ant-design-vue";
let http;
http = axios.create({
    timeout: 1000 * 60,
    baseURL: import.meta.env.VITE_APP_BASE_URL
})

// post请求头
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
http.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = 1;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
http.interceptors.response.use(
    response => {
        console.log('拦截：', response)
        if (response.status === 200) {
            if(response.data.code === 200) {
                return Promise.resolve(response.data);
            } else {
                message.error(response.data.info)
            }
        } else {
            return Promise.reject(response.data);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            return Promise.reject(error.response);
        }
    }
);

export default http
