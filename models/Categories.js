// Categories Model
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const DesignSchema = new Schema({
    collectionPalletImg: String,
    collectionPalletDescription: String,
    storeInfo: [],
    furnitureImg: String,
    furnitureDescription: String,
})

const Categories = new Schema({
    categoriesImg: String,
    category: String,
    description: String,
    //categoryItems: [designSchema]
})

module.exports = mongoose.model('Categories', Categories)