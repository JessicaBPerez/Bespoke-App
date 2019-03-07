const { Categories, Design, Flair } = require('../models/Categories.js')

const flairController = {
    index: (req, res) => {
        //res.send(`Hey, Jess!`)
        Flair.find().then(flair => {
            res.render('flair/index', {
                flair
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
        res.render('flair/new', { categoryId, designId, flairId })
            // })
    },
    create: (req, params) => {
        Flair.create(req.body).then(flair => {
            res.redirect('/flair')
        })
    }
}

module.exports = flairController