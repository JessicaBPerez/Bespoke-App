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
        let { categoryId, designId } = req.params

        Categories.findById(categoryId).then(category => {
                let designItem = category.designItems.id(designId)
                console.log(designItem)
                res.render('designs/new', { designItem, categoryId })
            })
            // let designItem = category.designItems.id(designId)
            // console.log(designItem)
            // res.render('designs/new', { designItem, categoryId })
            //res.send(`Hey, this is the edit form page for your Design Pallet`)
            // res.render('/designId/new', {
            //         designItem: req.params.designItem

        //     })
        //res.render('/:categoryId/design/:designId/new')
    },
}

module.exports = designController