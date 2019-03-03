// Routes
const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController.js')

//Categories Routes
router.get('/', categoriesController.index)


//Exports the routers
module.exports = router