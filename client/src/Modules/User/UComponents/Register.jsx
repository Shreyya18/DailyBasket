import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const Register = () => {
    const [formData, setformData] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        address:''
    })

    const handleChange=(e)=>{
        console.log({...formData, [e.target.name]:e.target.value})
        setformData({...formData, [e.target.name]:e.target.value})
    }

    const handleRegister =()=>{
        console.log("Form Details:", formData)
        axios.post('http://localhost:7000/user/registeruser', formData)
        .then((res)=>{
            console.log("registered user:", res.data)
            alert(res.data.message)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div style={{backgroundColor:"aliceblue"}}> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"50px",marginBottom:"50px",marginLeft:"370px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>REGISTER PAGE</Typography>
      <TextField variant='outlined' label=' Name' name='name'type='Text'  onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/>
      <TextField variant='outlined' label='Email' fullWidth  name='email' type='Email' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='Password' fullWidth name='password' type='password' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='Phone ' fullWidth name='phone'type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/>
       <TextField variant='outlined' label='Address ' name='address'multiline rows={4} fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/>
       <Button variant='contained' fullWidth onClick={handleRegister}>Register</Button>
      </Paper>
    </div>
  )
}

export default Register