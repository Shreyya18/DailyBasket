import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState({
    email:'',
    password:''
  })
  const handlechange = (e)=>{
    console.log({...login,[e.target.name]:e.target.value})
    setLogin({...login,[e.target.name]:e.target.value})
  }
 
  const Navigate = useNavigate();

  const handleLogin=()=>{
    console.log("Login data:",login)
    axios.post("http://localhost:7000/user/Login", login)
    .then((res)=>{
      console.log(res)
      if(res.data.success){
        localStorage.setItem("UserToken", res.data.token)
      alert("Login successfully!!!!")
      Navigate("/UAbout")
      }
      else{
        alert("Login Unsuccessfull!!")
      }
    })
    .catch((error)=>{
      console.log(error)
      alert("Unsuccessfull")
    })
  }

  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>LOGIN PAGE</Typography>
        {/* <TextField variant='outlined' type='text' label='NAME' name='name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/> */}
        <TextField variant='outlined' type='email' label='EMAIL' name='email' fullWidth style={{marginBottom:"10px"}}  onChange={handlechange}/>
        <TextField variant='outlined' type='password' label='PASSWORD' name='password' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        {/* <TextField variant='outlined' type='number' label='PHONE' name='phone' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/> */}
        {/* <TextField variant='outlined' multiline rows={5} label='ADDRESS' name='address' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/> */}
        <Button variant='contained' fullWidth onClick={handleLogin}>LOGIN</Button>
      </Paper>
    </div>
  )
}