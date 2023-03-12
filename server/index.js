import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import sequelize from './db.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()