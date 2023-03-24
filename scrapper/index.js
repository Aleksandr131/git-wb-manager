import {fetchOrders, fetchSales, fetchStocks, fetchReportDetailByPeriod, fetchPrice} from "./http/wbAPI.js"

fetchOrders('2023-03-22')
    .then(data => console.log(data))
    .catch(e => console.log(e))

// fetchSales('2023-03-19')
//     .then(data => console.log(data))
//     .catch(e => console.
// //     .then(data => console.log(data)log(e))

// fetchStocks())
//     .catch(e => console.log(e))

// fetchReportDetailByPeriod('2023-03-13', 100, '2023-03-19')
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// fetchPrice()
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// const params = [
//   {
//     date: '2023-03-22T11:18:42',
//     lastChangeDate: '2023-03-22T14:33:21',
//     supplierArticle: 'W1_BW01BLACK',
//     techSize: '0',
//     barcode: '2036793308632',
//     totalPrice: 8407.69,
//     discountPercent: 74,
//     warehouseName: 'Казань',
//     oblast: '',
//     incomeID: 10820790,
//     odid: 9002234328332,
//     nmId: 98977443,
//     subject: 'Сумки',
//     category: 'Аксессуары',
//     brand: '',
//     isCancel: false,
//     cancel_dt: '0001-01-01T00:00:00',
//     gNumber: '8564351568476403799',
//     sticker: '',
//     srid: '26131900574714160.0.0'
//   },
//   {
//     date: '2023-03-22T13:50:58',
//     lastChangeDate: '2023-03-22T14:33:21',
//     supplierArticle: 'W1_BW01BEIGE',
//     techSize: '0',
//     barcode: '2037510913122',
//     totalPrice: 8479.07,
//     discountPercent: 57,
//     warehouseName: 'Коледино',
//     oblast: 'Удмуртская',
//     incomeID: 0,
//     odid: 9002235849345,
//     nmId: 148166491,
//     subject: 'Сумки',
//     category: 'Аксессуары',
//     brand: '',
//     isCancel: false,
//     cancel_dt: '0001-01-01T00:00:00',
//     gNumber: '95532138193447877606',
//     sticker: '',
//     srid: '17022632574718728.0.0'
//   },
//   {
//     date: '2023-03-22T14:45:30',
//     lastChangeDate: '2023-03-22T17:49:12',
//     supplierArticle: 'W1_BW01BLACK',
//     techSize: '0',
//     barcode: '2036793308632',
//     totalPrice: 8407.69,
//     discountPercent: 74,
//     warehouseName: 'Казань',
//     oblast: 'Ульяновская',
//     incomeID: 10820790,
//     odid: 9002236521527,
//     nmId: 98977443,
//     subject: 'Сумки',
//     category: 'Аксессуары',
//     brand: '',
//     isCancel: false,
//     cancel_dt: '0001-01-01T00:00:00',
//     gNumber: '6371993168213199782',
//     sticker: '',
//     srid: '40840374574720457.3.0'
//   },
//   {
//     date: '2023-03-22T16:25:08',
//     lastChangeDate: '2023-03-22T17:49:12',
//     supplierArticle: 'W1_BW01BEIGE',
//     techSize: '0',
//     barcode: '2037510913122',
//     totalPrice: 8479.07,
//     discountPercent: 57,
//     warehouseName: 'Электросталь',
//     oblast: 'Московская',
//     incomeID: 11098182,
//     odid: 9002237482117,
//     nmId: 148166491,
//     subject: 'Сумки',
//     category: 'Аксессуары',
//     brand: '',
//     isCancel: false,
//     cancel_dt: '0001-01-01T00:00:00',
//     gNumber: '2565588691557910804',
//     sticker: '',
//     srid: '44952025074723353.0.0'
//   }
// ]
//
// params.forEach(order => console.log(order.totalPrice))


