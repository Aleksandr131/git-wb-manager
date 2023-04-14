const WbAPI = require('./http/wbAPI')

aaa = (data) => {
    console.log("Вот тут мы будем работать с этой переменной")
    // поднимаешь свой сервак, отправляешь пост запрос по соотвествующему адресу, а контроллер
    // на твоем серваке уже сохраняет эти данные в бд
    // соотвественно тебе тут нужно преобразовать данные к нужному формату (так полезнее)
    // скраппер должен лежать вне сервера, это отдельная программа как бы
    // либо нужно обращаться напрямую к БД, минуя свой сервак (так проще)
}

WbAPI.fetchOrders('2023-04-14')
    .then(aaa)
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


