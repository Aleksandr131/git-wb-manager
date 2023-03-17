import $authHost from "./index";

export const fetchOrders = async (params) => {
    const {data} = await $authHost.get('api/v1/supplier/orders', {params: params})
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