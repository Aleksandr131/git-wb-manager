const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    barcode: {type: DataTypes.INTEGER, allowNull: false},
    article_wb: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    article_seller: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProductPrice = sequelize.define('product_price', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATEONLY, allowNull: false},
    time: {type: DataTypes.TIME, allowNull: false},
    retail_price: {type: DataTypes.FLOAT, allowNull: false},
    discount_price: {type: DataTypes.FLOAT, allowNull: false},
    discount: {type: DataTypes.FLOAT, allowNull: false},
})

ProductPrice.hasMany(Product)
Product.belongsTo(ProductPrice)

module.exports = {
    Product,
    ProductPrice
}