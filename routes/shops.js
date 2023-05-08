const router = require('express').Router();

const shopController = require('../controller/shopController');
const Auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');


// shops
router.get('/', shopController.getShops)
router.get('/search',Auth, shopController.searchShops)
router.get('/:id', shopController.getShopById)
router.put('/:id',Auth, shopController.editShop)
router.delete('/delete/:id',Auth, shopController.deleteShop)
router.post('/', Auth,checkRole('admin'), shopController.createShop)

module.exports = router