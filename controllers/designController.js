const Categories = require('../models/Categories.js')

const designController = {
    show: (req, res) => {
        // res.send(`Sending Stuff`)
        let { categoryId, designId } = req.params

        Categories.findById(categoryId).then(category => {
            let designItem = category.designItems.id(designId)
            console.log(designItem)
            res.render('designs/show', { designItem, categoryId })
        })
    },
    new: (req, res) => {
        res.send(`Hey, this is the edit form page for your Design Pallet`)
            //res.render('/:categoryId/design/:designId/new')
    }
}

module.exports = designController