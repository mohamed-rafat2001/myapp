import axios from 'axios'
import { getToken } from './localStore'
const tokenInterceptor = axios.create({
    baseURL: 'http://localhost:5000'
})
tokenInterceptor.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${getToken}`
    }
    return req
})
export default tokenInterceptor