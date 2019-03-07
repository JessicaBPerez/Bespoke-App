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
        res.render('flair/new')
    }
}

module.exports = flairController