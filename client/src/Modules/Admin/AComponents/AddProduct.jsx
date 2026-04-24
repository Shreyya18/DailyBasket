import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { InputLabel } from '@mui/material';


export default function AddProduct() {
  const [product, setproduct] = useState({
    product_name:'',
    product_price:'',
    product_qty:'',
    product_description:'',
    category_id:'',
    product_image:''
  })

  const [category, setcategory]= useState([])

useEffect(()=>{
  axios.get('http://localhost:7000/category/getcategory')
  .then((res)=>{
    console.log(res.data.allcategory)
    setcategory(res.data.allcategory)
  })
  .catch((error)=>{
    console.log(error)
  })
}, [])

  const handlechange = (e)=>{
    console.log({...product,[e.target.name]:e.target.value})
    setproduct({...product,[e.target.name]:e.target.value})
    if(e.target.name === "product_image"){
      setproduct({...product, product_image:e.target.files[0]})
    }
    else{
      setproduct({...product, [e.target.name]:e.target.value});
    }
  }
  const handleSubmit = ()=>{
    // const existingusers =JSON.parse(localStorage.getItem('userdetails')) || [];
    // console.log(existingusers)
    // const allusers = [...existingusers,formdata]

    // localStorage.setItem('userdetails', JSON.stringify(allusers))
    // alert("Registration done!!!!!!!!!!!")

    console.log("Form details :", product)
    axios.post("http://localhost:7000/product/addproduct", product, {headers:{'Content-Type':'multipart/form-data'}})
    .then((res)=>{
      console.log("registered user: ",res.data)
      // alert("Register succefully")
      alert(res.data.message)

    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>ADD PRODUCT</Typography>
        <TextField variant='outlined' type='text' label='PNAME' name='product_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' type='number' label='PPRICE' name='product_price' fullWidth style={{marginBottom:"10px"}}  onChange={handlechange}/>
        <TextField variant='outlined' type='number' label='PQUANTITY' name='product_qty' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' multiline rows={5} label='PDESCRIPTION' name='product_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' type='file' label='PIMAGE' name='product_image' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} required/>

        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
        <Select
        name="category_id"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.category_id}
          label="Age"
          onChange={handlechange}
        >

          <MenuItem>Select Category</MenuItem>
          {category.map((cat)=>{
            return(
              <MenuItem value={cat._id}>{cat.category_name}</MenuItem>
            )
          })}

        </Select>
      </FormControl>
        
        <Button variant='contained' fullWidth onClick={handleSubmit}>ADD PRODUCT</Button>
      </Paper>
    </div>
  )
}