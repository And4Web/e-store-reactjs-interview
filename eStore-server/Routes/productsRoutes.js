const express = require('express');
const router = express.Router();

const {getProductsControllers} = require('../Controllers/productsController')

router.route('/get-products').get(getProductsControllers)

module.exports = router;