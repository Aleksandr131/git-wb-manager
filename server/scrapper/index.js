const WbAPI = require('./http/wbAPI')

WbAPI.fetchOrders('2023-04-14')
    .then(data => console.log(data))
    .catch(e => console.log(e))

// WbAPI.fetchSales('2023-03-19')
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// WbAPI.fetchStocks())
//     .then(data => console.log(data)
//     .catch(e => console.log(e))

// WbAPI.fetchReportDetailByPeriod('2023-03-13', 100, '2023-03-19')
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// WbAPI.fetchPrice()
//     .then(data => console.log(data))
//     .catch(e => console.log(e))


