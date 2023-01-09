// 请求封装
import axios from 'axios'

const request = axios.create({
    // API 请求的默认前缀
    // baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 12000 // 请求超时时间
})
// console.log(process.env.VUE_APP_API_BASE_URL);

export default request