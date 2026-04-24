import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function UpdateProduct() {
  const [product, setproduct] = useState({
    product_name:'',
    product_price:'',
    product_qty:'',
    product_description:'',
    category_id:'',
    product_image:''
  })

  const{id} = useParams();
  const handlechange = (e)=>{
    console.log({...product,[e.target.name]:e.target.value})
    // setproduct({...product,[e.target.name]:e.target.value})
    if (e.target.name === 'product_image') {
      setproduct({ ...product, product_image: e.target.files[0] })
    } else {
      setproduct({ ...product, [e.target.name]: e.target.value })
    }
  }


  useEffect(()=>{
    axios.get(`http://localhost:7000/product/getproductbyid/${id}`)
    .then((res)=>{
      console.log(res.data.byid)
      setproduct(res.data.byid)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[id])

const [category, setCategory] = useState([])
  useEffect(() => {
    axios.get('http://localhost:7000/category/getcategory')
      .then((res) => {
        console.log(res.data.allcategory)
        setCategory(res.data.allcategory)
      })
      .catch((error) => {
        console.log(error)

      })
  }, [])


  const handleUpdate = async ()=>{
    const productdata = new FormData()
    productdata.append('product_name',product.product_name)
    productdata.append('product_price',product.product_price)
    productdata.append('product_qty',product.product_qty)
    productdata.append('product_description',product.product_description)
    productdata.append('category_id',product.category_id)

    if(product.product_image){
      productdata.append("product_image", product.product_image)
    }
    

    // try {
    //   await axios.put(`http://localhost:7000/product/updateproduct/${id}`,product)
    //   alert("Product Updated")

    // } catch (error) {
    //  console.log(error) 
    // }


    try {
      await axios.put(
        `http://localhost:7000/product/updateproduct/${id}`,
        productdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      alert("product updated")
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>Update Product</Typography>
        <TextField variant='outlined' type='text' label='PRODUCT NAME' name='product_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.product_name}/>
        <TextField variant='outlined' type='number' label='PRODUCT PRICE' name='product_price' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.product_price}/>
        <TextField variant='outlined' type='number' label='PRODUCT QUANTITY' name='product_qty' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.product_qty}/>
        <TextField variant='outlined' multiline rows={5} label='PRODUCT DESCRIPTION' name='product_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.product_description}/>
        <TextField variant='outlined' type='file' InputLabelProps={{shrink:true}} label='PRODUCT IMAGE' name='product_image' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        
        <img src={`http://localhost:7000/image/${product.product_image}`}/>


        <FormControl fullWidth>
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

        <Button variant='contained' fullWidth  onClick={handleUpdate}>Update Product</Button>
      </Paper>
    </div>
  )
}