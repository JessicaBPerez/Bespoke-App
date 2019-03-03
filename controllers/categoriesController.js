// Categories Controller
const Categories = require('../models/Categories.js')

const categoriesController = {
    index: (req, res) => {
        res.send(`Show all categories`)
    }
}




module.exports = categoriesController