// Routes
const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController.js')

//Categories Routes
router.get('/', categoriesController.index)

router.get('/new', categoriesController.new)

router.post('/', categoriesController.create)

router.get('/:categoryId', categoriesController.show)

router.get('/:categoryId/edit', categoriesController.edit)

//Exports the routers
module.exports = router