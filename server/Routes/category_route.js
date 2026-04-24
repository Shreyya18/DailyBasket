const express = require('express');
const {addcategory, getcategory,getcategorybyid,deletecategory,updatecategory} = require('../Controller/category_controller')

const route = express.Router();

route.post('/addcategory', addcategory);
route.get('/getcategory', getcategory);
route.get('/getcategorybyid/:id', getcategorybyid);
route.delete('/deletecategory/:id', deletecategory);
route.put('/updatecategory/:id', updatecategory)
module.exports = route;