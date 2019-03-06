// Routes
const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController.js')
const designController = require('../controllers/designController.js')

//Categories Routes
router.get('/', categoriesController.index)

router.get('/new', categoriesController.new)

router.post('/', categoriesController.create)

router.get('/:categoryId', categoriesController.show)

router.get('/:categoryId/edit', categoriesController.edit)

router.put('/:categoryId', categoriesController.update)

router.delete('/:categoryId', categoriesController.delete)

//Design Routes
router.get('/:categoryId/design/:designId', designController.show)

router.get('/:categoryId/design/:designId/new', designController.new)

router.post('/:categoryId/design', designController.create)


//Exports the routers
module.exports = router