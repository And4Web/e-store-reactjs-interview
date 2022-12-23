const express = require('express');
const router = express.Router();

const {getProductsController, getCategoriesController} = require('../Controllers/productsController')

router.route('/get-categories').get(getCategoriesController)
router.route('/get-products').get(getProductsController)

module.exports = router;