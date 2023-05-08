const router = require('express').Router();

// import package swagger 
const swaggerUi = require('swagger-ui-express');
// import file json
const swaggerDocument = require('../docs/swagger.json');

// API docs => dokumentasi API
router.use('/api-docs', swaggerUi.serve);
router.use('/api-docs', swaggerUi.setup(swaggerDocument));

const User = require('./users');
const Shops = require('./shops');
const Products = require('./products');

router.use('/api/v1/users/', User);
router.use('/api/v1/shops/', Shops);
router.use('/api/v1/products/', Products);



// Dashboard

module.exports = router