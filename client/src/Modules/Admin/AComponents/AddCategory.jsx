
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

export default function AddCategory() {
  const [category, setcategory] = useState({
    category_name:'',
    category_description:''
  })
  const handlechange = (e)=>{
    console.log({...category,[e.target.name]:e.target.value})
    setcategory({...category,[e.target.name]:e.target.value})
  }
  const handleregister = ()=>{

    console.log("Form details :", category)
    axios.post("http://localhost:7000/category/addcategory", category)
    .then((res)=>{
      console.log("registered category: ",res.data)
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
        <Typography variant='h4'>ADD CATEGORY PAGE</Typography>
        <TextField variant='outlined' type='text' label='CNAME' name='category_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' multiline rows={5} label='CDESCRIPTION' name='category_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <Button variant='contained' fullWidth onClick={handleregister}>ADD PRODUCT</Button>
      </Paper>
    </div>
  )
}
