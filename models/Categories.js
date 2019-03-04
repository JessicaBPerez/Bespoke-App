// Categories Model
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const DesignSchema = new Schema({
    collectionPalletImg: String,
    collectionPalletDescription: String,
    storeInfo: [],
    furnitureImg1: String,
    furnitureImg2: String,
    furnitureImg3: String,
    furnitureDescription: String,
})

const Categories = new Schema({
    categoriesImg: String,
    category: String,
    description: String,
    designItems: [DesignSchema]
})

module.exports = mongoose.model('Categories', Categories)