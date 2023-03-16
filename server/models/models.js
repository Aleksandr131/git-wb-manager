const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Product = sequelize.define('product', {
    sku: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    size: {type: DataTypes.STRING, allowNull: false, defaultValue: '0'},
    image: {type: DataTypes.STRING, allowNull: false},
    barcode: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    article_seller: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ProductPrice = sequelize.define('product_price', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    change_full_date: {type: DataTypes.DATE, allowNull: false},
    retail_price: {type: DataTypes.INTEGER, allowNull: false},
    discount: {type: DataTypes.INTEGER, allowNull: false},
    discount_price: {type: DataTypes.INTEGER, allowNull: false}
})

const ProductInfo = sequelize.define('product_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Subject = sequelize.define('subject', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Stock = sequelize.define('stock', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const StockProduct = sequelize.define('stock_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    balance: {type: DataTypes.INTEGER, allowNull: false}
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    spp: {type: DataTypes.INTEGER, allowNull: false},
    wb_discount_price: {type: DataTypes.INTEGER, allowNull: false},
    srid: {type: DataTypes.STRING, unique: true, allowNull: false},
    code_wb: {type: DataTypes.INTEGER, unique: true, allowNull: false}
})

const OrderStatus = sequelize.define('order_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_date: {type: DataTypes.DATE, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'Логистика'}
})

const Country = sequelize.define('country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const District = sequelize.define('district', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Region = sequelize.define('region', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const City = sequelize.define('city', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const SubjectBrand = sequelize.define('subject_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

Product.hasMany(ProductPrice)
ProductPrice.belongsTo(Product)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Subject.hasMany(Product)
Product.belongsTo(Subject)

Category.hasMany(Subject)
Subject.belongsTo(Category)

Stock.hasMany(Order)
Order.belongsTo(Stock)

Order.hasMany(ProductPrice)
ProductPrice.belongsTo(Order)

Order.hasMany(OrderStatus)
OrderStatus.belongsTo(Order)

Country.hasMany(Order)
Order.belongsTo(Country)

Country.hasMany(District)
District.belongsTo(Country)

District.hasMany(Region)
Region.belongsTo(District)

Region.hasMany(City)
City.belongsTo(Region)

Subject.belongsToMany(Brand, {through: SubjectBrand})
Brand.belongsToMany(Subject, {through: SubjectBrand})

Product.belongsToMany(Stock, {through: StockProduct})
Stock.belongsToMany(Product, {through: StockProduct})

module.exports = {
    Product,
    ProductPrice,
    ProductInfo,
    Brand,
    Subject,
    Category,
    Stock,
    StockProduct,
    Order,
    OrderStatus,
    Country,
    District,
    Region,
    City,
    SubjectBrand
}