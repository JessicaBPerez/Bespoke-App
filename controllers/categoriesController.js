// Categories Controller
const Categories = require('../models/Categories.js')

const categoriesController = {
    index: (req, res) => {
        Categories.find().then(categories => {
                res.render('index', {
                    categories
                })
            })
            //res.send(`Show all categories`)
    },
    new: (req, res) => {
        res.render('new')
            //res.send(`I'm rending a form to create new Categories`)
    },
    create: (req, res) => {
        Categories.create(req.body).then(category => {
                res.redirect('/')
            })
            //res.send(`I'm creating a new category in the database`)
    },
    show: (req, res) => {
        Categories.findById(req.params.categoryId).then(category => {
                res.render('show', {
                    category
                })
            })
            //res.send(`Shows a single category- the design`)
    },
    edit: (req, res) => {
        res.send(`I'm editing a single category- design`)
    },
    update: (req, res) => {
        res.send(`Actually editing the category in the database`)
    },
    delete: (req, res) => {
        res.send(`Actually delete one of the categories`)
    }
}




module.exports = categoriesController