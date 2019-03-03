// Categories Model
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Categories = new Schema({
    categoriesImg: String,
    category: String,
    //categoryItems: [designSchema]
})

module.exports = mongoose.model('Categories', Categories)