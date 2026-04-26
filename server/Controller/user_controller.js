const usertable = require("../Models/user_model")
const jwt = require("jsonwebtoken")
const SECRECT_KEY = "product-crud"

const registeruser = async(req, res)=>{
    try {
        const {name, email, password, phone, address} = req.body;
        const useremail = await usertable.findOne({email})
        if(useremail){
            res.json({message:"Email already exist"})
        }

        const userdetails = new usertable({
            name, email, password, phone,address
        })
        await userdetails.save()
        res.json({message:"User registered successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
        
    }
}

const getuser =async(req,res)=>{
    try {
        const getallusers = await usertable.find();
        console.log(getallusers)
        res.status(200).json({message:"user fetched", allusers:getallusers})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error", error})
    }
}

const getuserbyid = async(req,res)=>{
    try {
        const uid = req.params.id;
        const userbyid = await usertable.findById(uid)
        console.log(userbyid)
        res.status(200).json({message:"user found", byid:userbyid})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error", error})
    }
}

const deleteuser = async(req,res)=>{
    try {
        const d_id=req.params.id;
        const deleteuser= await usertable.findByIdAndDelete(d_id)
        console.log(deleteuser)
        res.status(200).json({message:"user deleted", d_user:deleteuser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error", error})
    }
}


const updateuser = async(req,res)=>{
    try {
        const uid = req.params.id;
        const body = req.body;
        const updateuser = await usertable.findByIdAndUpdate(uid, body, {new:true})
        console.log(updateuser)
        res.status(200).json({message:"user updated", updatedata:updateuser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error", error})
    }
}

const Login = async(req,res)=>{
    try {
        const {email, password}=req.body;
        const userlogin= await usertable.findOne({email, password})

        if(!userlogin){
            res.json({success:false, message:"Invalid details"})
        }
        else{
            const token = await jwt.sign(userlogin.id, SECRECT_KEY)
            res.json({success:true, messgae:"Login successful!", token})
        }
    } catch (error) {
        console.log(error)
         res.status(500).json({message:"Server error", error})
    }
}

const getprofile = async(req,res)=>{
  try {
    const user = await usertable.findById(req.userid)
    res.json({success:true, udata:user})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Server error", error})
  }
}

const updateprofile = async(req,res)=>{
  try {
    const updateduser = await usertable.findByIdAndUpdate(req.userid, req.body, {new:true})
    res.json({message:"profile updated", success:true, udetails:updateduser})

  } catch (error) {
    console.log(error)
    res.status(500).json({message:"server error", error})
  }
}

module.exports = {registeruser, getuser, getuserbyid, deleteuser, updateuser, Login,getprofile,updateprofile}