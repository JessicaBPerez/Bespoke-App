// Categories Model
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Flair = new Schema({
    flairName: String,
    flairImg: String,
    flairDescription: String,
    storeInfo: Array,
    flairFurnitureImg1: String,
    flairFurnitureImg2: String,
    flairFurnitureImg3: String,
    flairFurnitureDescription: String
})

const Design = new Schema({
    category: String,
    collectionPalletImg: String,
    collectionPalletDescription: String,
    storeInfo: Array,
    furnitureImg1: String,
    furnitureImg2: String,
    furnitureImg3: String,
    furnitureDescription: String,
})

const Categories = new Schema({
    categoriesImg: String,
    category: String,
    description: String,
    designItems: [Design]
})


module.exports = {
    Categories: mongoose.model('Categories', Categories),
    Design: mongoose.model('Design', Design),
    Flair: mongoose.model('Flair', Flair),
}