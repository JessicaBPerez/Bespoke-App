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
    }
}

module.exports = designController