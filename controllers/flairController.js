const { Categories, Design, Flair } = require('../models/Categories.js')

const flairController = {
    index: (req, res) => {
        Flair.find().then(flair => {
            res.render('flair/index', {
                flair,
                categoryId: req.params.categoryId,
                designId: req.params.designId
            })
        })
    },
    new: (req, res) => {

        let { categoryId, designId, flairId } = req.params
        res.render('flair/new', {
            categoryId,
            designId,
            flairId,
        })
    },
    create: (req, res) => {
        Flair.create(req.body).then(flair => {
            //res.redirect(`/${req.params.categoryId}/design/${req.params.designId}/flair`)
            res.redirect(`/${req.params.categoryId}/design/${req.params.designId}/flair`)
        })
    },
    show: (req, res) => {
        let { categoryId, designId, flairId } = req.params
        Flair.findById(req.params.flairId).then(flair => {
            // let flairItem = category.flairItem.id(designId)
            res.render('flair/show', {
                flair,
                flairId,
                designId,
                categoryId
            })
        })
    },
    edit: (req, res) => {
        //res.send(`hi`)
        let { categoryId, designId, flairId } = req.params
        Flair.findById(req.params.flairId).then(flair => {
            res.render('flair/edit', {
                flair,
                flairId,
            })
        })
    }

}

module.exports = flairController