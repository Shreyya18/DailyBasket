import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateCategory() {
  const [category, setcategory] = useState({
    category_name:'',
    category_description:''
  })

  const{id} = useParams();
  const handlechange = (e)=>{
    console.log({...category,[e.target.name]:e.target.value})
    setcategory({...category,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    axios.get(`http://localhost:7000/category/getcategorybyid/${id}`)
    .then((res)=>{
      console.log(res.data.byid)
      setcategory(res.data.byid)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  // const handleregister = ()=>{

  //   console.log("Form details :", category)
  //   axios.post("http://localhost:7000/category/addcategory", category)
  //   .then((res)=>{
  //     console.log("registered category: ",res.data)
  //     // alert("Register succefully")
  //     alert(res.data.message)

  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }


  const handleUpdate = async ()=>{
    const categorydata = new FormData()
    categorydata.append('category_name',category.category_name)
    categorydata.append('category_description',category.category_description)

    try {
      await axios.put(`http://localhost:7000/category/updatecategory/${id}`,category)
      alert("Category Updated")

    } catch (error) {
     console.log(error) 
    }

  }

  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>Update Category</Typography>
        <TextField variant='outlined' type='text' label='CNAME' name='category_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={category.category_name}/>
        <TextField variant='outlined' multiline rows={5} label='CDESCRIPTION' name='category_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={category.category_description}/>
        <Button variant='contained' fullWidth  onClick={handleUpdate}>Update Category</Button>
      </Paper>
    </div>
  )
}