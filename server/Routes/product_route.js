const express = require('express');
const {addproduct, getproduct, getproductbyid, deleteproduct, updateproduct} = require('../Controller/product_controller')

const upload = require('../Middleware/imageupload')
const route = express.Router();

route.post('/addproduct',upload.single('product_image'), addproduct);
route.get('/getproduct', getproduct)
route.get('/getproductbyid/:id', getproductbyid)
route.delete('/deleteproduct/:id', deleteproduct)
route.put('/updateproduct/:id',upload.single('product_image'), updateproduct)
module.exports = route;