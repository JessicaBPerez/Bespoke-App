const { Categories, Design } = require('../models/Categories.js')

const designController = {
    show: (req, res) => {
        // res.send(`Sending Stuff`)
        let { categoryId, designId } = req.params

        Categories.findById(categoryId).then(category => {
            let designItem = category.designItems.id(designId)
            console.log(designItem)
            res.render('designs/show', { designItem, categoryId, designId })
        })
    },
    new: (req, res) => {
        let { categoryId, designId } = req.params

        Categories.findById(categoryId).then(category => {
            let designItem = category.designItems.id(designId)
            console.log(designId)
            res.render('designs/new', { designItem, categoryId })
        })
    },
    create: (req, res) => {
        let { categoryId, designId } = req.params
        Design.create(req.body).then(flair => {
                res.redirect(`/${categoryId}/design/${flair._id}`)
            })
            // Categories.findById(categoryId).then(category => {
            //     let designItem = category.designItems.id(designId)
            //     console.log(designId)
            //     res.render('designs/new', { designItem, categoryId })
            // })
    },
}

module.exports = designController