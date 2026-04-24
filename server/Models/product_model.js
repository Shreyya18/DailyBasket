const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    product_name:{type:String, required:true},
    product_price:{type:Number, required:true},
    product_qty:{type:Number, required:true},
    product_description:{type:String, required:true},
    category_id:{type:mongoose.Schema.Types.ObjectId, ref:"Category", required:false},
    product_image:{type:String}
})

module.exports = mongoose.model("Product", productschema)
// product_name,
// product_price,
// product_qty,
// product_description