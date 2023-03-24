const {$authHostStatistics, $authHostStandard} = require('./index')

class WbAPI {
     async fetchOrders(dateFrom, flag = 1) {
        const {data} = await $authHostStatistics.get('api/v1/supplier/orders', {
            params: {
                dateFrom, flag
            }
        })
        return data
    }

    async fetchSales(dateFrom, flag = 1) {
        const {data} = await $authHostStatistics.get('api/v1/supplier/sales', {
            params: {
                dateFrom, flag
            }
        })
        return data
    }

    async fetchStocks(dateFrom = new Date().toDateString()) {
        const {data} = await $authHostStatistics.get('api/v1/supplier/stocks', {
            params: {
                dateFrom
            }
        })
        return data
    }

    async fetchReportDetailByPeriod(dateFrom, limit, dateTo, rrdid = 0) {
        const {data} = await $authHostStatistics.get('api/v1/supplier/reportDetailByPeriod', {
            params: {
                dateFrom, limit, dateTo, rrdid
            }
        })
        return data
    }

    async fetchPrice(quantity = 1) {
        const {data} = await $authHostStandard.get('public/api/v1/info', {
            params: {
                quantity
            }
        })
        return data
    }
}

module.exports = new WbAPI()