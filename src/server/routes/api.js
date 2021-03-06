const express = require('express');
const productControllers = require('../controllers/productControllers')
const router = express.Router();
// home/zip search
// router.get('/', 
// (req, res) => {
//   //console.log('hit')
// });
// products index
//this route may need to change -- this is just a placeholder
router.get('/:zip/products', productControllers.getZip, (req, res) => {
  res.status(200).json(res.locals.products)
});

// // old stuff 
// //product add
// // this route may need to change -- this is just a placeholder
// router.post('/products/new',
// productControllers.sellerSave,
// productControllers.productSave, // will save client info to the two tables tb, the product and the seller 
// // productControllers.getZip, // will send updated zip code match to the front end 
// (req, res) => {
//   console.log('zip post');
// });




// product add
router.post('/products/new',
productControllers.productSave,
productControllers.getZip,
(req, res) => {
  res.status(200).json(res.locals.products);
});

// seller add
router.post('/products/seller',
productControllers.sellerSave, 
(req, res) => {
  res.status(200).json(res.locals.seller);
});




module.exports = router;
