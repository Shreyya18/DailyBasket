const mongoose = require('mongoose');
const categoryschema = new mongoose.Schema({
    category_name:{type:String},
    category_description:{type:String}
})

module.exports = mongoose.model("Category", categoryschema )