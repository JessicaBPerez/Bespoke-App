const { Categories, Design, Flair } = require('../models/Categories.js')

const flairController = {
    index: (req, res) => {
        //res.send(`Hey, Jess!`)
        Flair.find().then(flair => {
            res.render('flair/index', {
                flair,
                categoryId: req.params.categoryId,
                designId: req.params.designId
            })
        })
    },
    new: (req, res) => {
        //res.send(`Hey Jess, this is the new form!`)
        // res.render('flair/new')
        let { categoryId, designId, flairId } = req.params
            // Flair.findById(flairId).then(flair => {
            //let flairItem = flair.flairItem.id(flairId)
            //     console.log(flairId)
            // Flair.findById(flairId).then(flair => {
            //     let flairItem = flair.flairItem.id(flairId)
            // })
        res.render('flair/new', {
                categoryId,
                designId,
                flairId,
            })
            // })
    },
    create: (req, res) => {
        Flair.create(req.body).then(flair => {
            //res.redirect(`/${req.params.categoryId}/design/${req.params.designId}/flair`)
            res.redirect(`/${req.params.categoryId}/design/${req.params.designId}/flair`)
        })
    },
    show: (req, res) => {
        //res.send(`Hey, Jess`)
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
    }
}

module.exports = flairController