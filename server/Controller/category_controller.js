const categorytable = require('../Models/category_model')

const addcategory = async(req,res)=>{
    try {
        const {category_name, category_description} = req.body;

        const categorydetails = new categorytable({
            category_name,
            category_description
        })

        await categorydetails.save();
        res.status(201).json({message:"Category added successfully", pcategory:categorydetails})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error})
    }
}
const getcategory = async(req,res)=>{
    try {
        const getallcategory = await categorytable.find();
        console.log(getallcategory);
        res.status(200).json({message:"Category fetched", allcategory:getallcategory})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error})
    }
}

const getcategorybyid = async(req,res)=>{
    try {
        const cid= req.params.id;
        const categoryid= await categorytable.findById(cid);
        console.log(categoryid);
        res.status(200).json({message:"Category found", byid:categoryid})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error})
    }
}

const deletecategory = async(req,res)=>{
    try {
        const d_id = req.params.id;
        const deletecategory = await categorytable.findByIdAndDelete(d_id);
        console.log(deletecategory);
        res.status(200).json({message:"Category deleted", d_category:deletecategory})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error})
    }
}

const updatecategory = async(req,res)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const updatecategory = await categorytable.findByIdAndUpdate(id, body, {new:true});
        console.log(updatecategory);
        res.status(200).json({messsage:"Category updated", u_cateogy:updatecategory})
    } catch (error) {
        console.log(error);
        res.status(500).json({messaage:"Server error", error})
    }
}


module.exports ={addcategory,getcategory,getcategorybyid,deletecategory,updatecategory}