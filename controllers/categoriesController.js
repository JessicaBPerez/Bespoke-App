// Categories Controller
const Categories = require('../models/Categories.js')

const categoriesController = {
    index: (req, res) => {
        res.send(`Show all categories`)
    },
    new: (req, res) => {
        res.send(`I'm rending a form to create new Categories`)
    },
    create: (req, res) => {
        res.send(`I'm creating a new category in the database`)
    }
}




module.exports = categoriesController