const producttable = require('../Models/product_model')

const addproduct = async(req,res)=>{
    try {
        const {product_name, product_price, product_qty, product_description, category_id}= req.body;
        const pimage=req.file? req.file.filename:null;

        const productdetails = new producttable({
            product_name, 
            product_price, 
            product_qty, 
            product_description,
            category_id,
            product_image:pimage
        })
        await productdetails.save();
        res.status(201).json({message:"Product added successfully", pdata:productdetails})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error})
    }
}

const getproduct =async(req,res)=>{
    try {
        const getallproducts= await producttable.find();
        console.log(getallproducts);
        res.status(200).json({message:"Products fetched", allproducts:getallproducts})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error});
    }
}

const getproductbyid = async(req, res)=>{
    try {
        const pid= req.params.id;
        const productbyid = await producttable.findById(pid);
        console.log(productbyid);
        res.status(200).json({message:"Product found", byid:productbyid})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error});
    }
}

const deleteproduct = async(req,res)=>{
    try {
        const d_id = req.params.id;
        const deleteproduct= await producttable.findByIdAndDelete(d_id);
        console.log(deleteproduct);
        res.status(200).json({message:"Product deleted", d_paroduct:deleteproduct})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error});
    }
}

const updateproduct = async(req,res)=>{
    // try {
    //     const {id} = req.params;
    //     const body= req.body;
    //     const updateproduct = await producttable.findByIdAndUpdate(id, body,{new:true})
    //     console.log(updateproduct);
    //     res.status(200).json({message:"Product updated", u_product:updateproduct})
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({message:"Server error", error});
    // }
    try{
    const{product_name, product_price, product_qty, product_description, category_id} = req.body;
        const pimage = req.file ? req.file.filename:null

        const productdetails ={
           product_name, 
            product_price, 
            product_qty, 
            product_description,
            category_id,
            product_image:pimage
        };
        const updateproduct = await producttable.findByIdAndUpdate(req.params.id, productdetails,{new:true});
        // console.log(updateproduct)
        res.status(200).json({success: true, message:"Product updated",updatedata:updateproduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}


module.exports = {addproduct, getproduct, getproductbyid, deleteproduct, updateproduct}