require('dotenv').config()
const axios = require('axios')

const $authHostStatistics = axios.create({
    baseURL: process.env.STATISTICS_APP_API_URL
})

const $authHostStandard = axios.create({
    baseURL: process.env.STANDARD_APP_API_URL
})

const authInterceptorStatistics = config => {
    config.headers.authorization = process.env.STATISTICS_TOKEN
    return config
}

const authInterceptorStandard = config => {
    config.headers.authorization = process.env.STANDARD_TOKEN
    return config
}

$authHostStatistics.interceptors.request.use(authInterceptorStatistics)
$authHostStandard.interceptors.request.use(authInterceptorStandard)

module.exports = {
    $authHostStatistics,
    $authHostStandard
}