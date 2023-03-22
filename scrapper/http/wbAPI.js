import {$authHostStatistics, $authHostStandard} from "./index.js";

export const fetchOrders = async (dateFrom, flag = 1) => {
    const {data} = await $authHostStatistics.get('api/v1/supplier/orders', {params: {
        dateFrom, flag
        }})
    return data
}

export const fetchSales = async (dateFrom, flag = 1) => {
    const {data} = await $authHostStatistics.get('api/v1/supplier/sales', {params: {
            dateFrom, flag
        }})
    return data
}

export const fetchStocks = async (dateFrom = new Date().toDateString()) => {
    const {data} = await $authHostStatistics.get('api/v1/supplier/stocks', {params: {
            dateFrom
        }})
    return data
}

export const fetchReportDetailByPeriod = async (dateFrom, limit, dateTo, rrdid = 0) => {
    const {data} = await $authHostStatistics.get('api/v1/supplier/reportDetailByPeriod', {params: {
            dateFrom, limit, dateTo, rrdid
        }})
    return data
}

export const fetchPrice = async (quantity = 1) => {
    const {data} = await $authHostStandard.get('public/api/v1/info', {params: {
            quantity
        }})
    return data
}

// const parseData = (data) =>
// {
//     // parse data from wb
//     console.log("data is :", data)
//     for (const dataKey in data) {
//         // data[dataKey];
//     }
// }
//
// const params = {
//     dateFrom: '2023-03-14',
//     flag: 1
// }
//
// await fetchOrders(params).then(data =>
//     parseData(data)
// ).catch(err =>
//     console.log("something goes wrong")
// )