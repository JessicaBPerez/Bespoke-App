const { Categories, Design, Flair } = require('../models/Categories.js')

const flairController = {
    index: (req, res) => {
        let { categoryId, designId, flairId } = req.params
        Flair.findById(req.params.flairId).then()
        Flair.find().then(flair => {
            res.render('flair/index', {
                flair,
                categoryId: req.params.categoryId,
                designId: req.params.designId,
                flairId: req.params.flairId
            })
        })
    },
    new: (req, res) => {

        let { categoryId, designId, flairId } = req.params
        res.render('flair/new', {
            categoryId: req.params.categoryId,
            designId: req.params.designId,
            flairId: req.params.flairId,
        })
    },
    create: (req, res) => {
        Flair.create(req.body).then(flair => {
            res.redirect(`/${req.params.categoryId}/design/${req.params.designId}/flair`)
        })
    },
    show: (req, res) => {
        let { categoryId, designId, flairId } = req.params
        Flair.findById(req.params.flairId).then(flair => {
            res.render('flair/show', {
                flair,
                categoryId: req.params.designId,
                designId: req.params.designId,
                flairId: req.params.flairId
            })
        })
    },
    edit: (req, res) => {
        let { categoryId, designId, flairId } = req.params
        Flair.findById(req.params.flairId).then(flair => {
            res.render('flair/edit', {
                flair,
                categoryId: req.params.categoryId,
                designId: req.params.designId,
                flairId: req.params.flairId
            })
        })
    },
    update: (req, res) => {
        let { categoryId, designId, flairId } = req.params
        Flair.findByIdAndUpdate(req.params.flairId, req.body, {
                new: true
            })
            .then(() => {
                res.redirect(`/${req.params.categoryId}/design/${req.params.designId}/flair/${req.params.flairId}`)
            })
    },
    delete: (req, res) => {
        Flair.findByIdAndDelete(req.params.flairId).then(() => {
            console.log(`Deleted style ${req.params.flairId}`)
            res.redirect(`/${req.params.categoryId}/design/${req.params.designId}/flair`)
        })
    }
}

module.exports = flairController