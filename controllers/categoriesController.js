// Categories Controller
const { Categories } = require('../models/Categories.js')

const categoriesController = {
    index: (req, res) => {
        Categories.find().then(categories => {
            res.render('index', {
                categories
            })
        })
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        Categories.create(req.body).then(category => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Categories.findById(req.params.categoryId).then(category => {
            res.render('show', {
                category
            })
        })
    },
    edit: (req, res) => {
        Categories.findById(req.params.categoryId).then(category => {
            res.render('edit', { category })
        })
    },
    update: (req, res) => {
        Categories.findByIdAndUpdate(req.params.categoryId, req.body, {
            new: true
        }).then(() => {
            res.redirect(`/${req.params.categoryId}`)
        })
    },
    delete: (req, res) => {

        Categories.findByIdAndDelete(req.params.categoryId).then(() => {
            console.log(`Deleted style ${req.params.categoryId}`)
            res.redirect('/')
        })
    }
}



module.exports = categoriesController