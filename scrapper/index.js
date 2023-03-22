import {fetchOrders, fetchSales, fetchStocks, fetchReportDetailByPeriod, fetchPrice} from "./http/wbAPI.js"

// fetchOrders('2023-03-21')
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// fetchSales('2023-03-19')
//     .then(data => console.log(data))
//     .catch(e => console.
// //     .then(data => console.log(data)log(e))

// fetchStocks())
//     .catch(e => console.log(e))

// fetchReportDetailByPeriod('2023-03-13', 100, '2023-03-19')
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

fetchPrice()
    .then(data => console.log(data))
    .catch(e => console.log(e))

// const params = [
//     {
//         date: '2023-03-21T07:06:03',
//         lastChangeDate: '2023-03-21T12:43:13',
//         supplierArticle: 'W1_BW01BLACK',
//         techSize: '0',
//         barcode: '2036793308632',
//         totalPrice: 8495,
//         discountPercent: 67,
//         warehouseName: 'Казань',
//         oblast: 'Оренбургская',
//         incomeID: 10980732,
//         odid: 9002221936195,
//         nmId: 98977443,
//         subject: 'Сумки',
//         category: 'Аксессуары',
//         brand: '',
//         isCancel: false,
//         cancel_dt: '0001-01-01T00:00:00',
//         gNumber: '98014292942051912539',
//         sticker: '',
//         srid: '22941674074663598.0.0'
//     }
//     ]
//
// console.log(params)
