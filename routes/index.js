// Routes
const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController.js')
const designController = require('../controllers/designController.js')
const flairController = require('../controllers/flairController.js')

//Categories Routes
router.get('/', categoriesController.index)

router.get('/new', categoriesController.new)

router.post('/', categoriesController.create)

router.get('/:categoryId', categoriesController.show)

router.get('/:categoryId/edit', categoriesController.edit)

router.put('/:categoryId', categoriesController.update)

router.delete('/:categoryId', categoriesController.delete)

//Design Routes
// router.get('/:categoryId/design/designId', designController.index)

router.get('/:categoryId/design/:designId', designController.show)

// router.get('/:categoryId/design/:designId/new', designController.new)

// router.post('/:categoryId/design', designController.create)


//Flair Routes
router.get('/:categoryId/design/:designId/flair', flairController.index)

router.get('/:categoryId/design/:designId/flair/new', flairController.new)

router.post('/:categoryId/design/:designId/flair', flairController.create)

router.get('/:categoryId/design/:designId/flair/:flairId', flairController.show)

router.get('/:categoryId/design/:designId/flair/:flairId/edit', flairController.edit)

//Exports the routers
module.exports = router