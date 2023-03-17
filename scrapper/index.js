import dotenv from 'dotenv'
dotenv.config()
import axios from 'axios'

const $authHost = axios.create({
    baseURL: process.env.API_URL
})

const authInterceptor = config => {
    config.headers.authorization = process.env.TOKEN
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export default $authHost