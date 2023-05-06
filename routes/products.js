const router = require('express').Router();

const productController = require('../controller/productController');
const Auth = require('../middleware/auth');

// API
// product
router.get('/', Auth, productController.getProducts)
router.get('/search', productController.searchProduct)
router.get('/:id', productController.getProductById)
router.put('/:id', productController.editProduct)
router.delete('/:id', productController.deleteProduct)
router.post('/', Auth, productController.createProduct)

module.exports = router