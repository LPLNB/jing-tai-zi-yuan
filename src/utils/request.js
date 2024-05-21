import http from "axios"
import pinia from '@/pinia'

http.create({
    timeout: 1000 * 60,
    baseURL: import.meta.env.VITE_APP_BASE_URL
})

http.interceptors.request.use(config=>{
    const token = ''
})

export default http
