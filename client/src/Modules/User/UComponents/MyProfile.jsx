import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect } from 'react';

export default function MyProfile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''

    })

    const handleChange = (e) => {
        console.log({ ...formData, [e.target.name]: e.target.value })
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const token = localStorage.getItem("UserToken")
    console.log("usertoken details", token)

    const viewprofile = async (req, res) => {
        try {
            const response = await fetch("http://localhost:7000/user/getprofile", {method:"GET", headers:{"auth-token":token}}) 
            const details = await response.json()
            console.log(details.udata)
            setFormData(details.udata)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        viewprofile();
    },[])

    const handleprofile = async(req,res)=>{
        try {
            const response = await fetch("http://localhost:7000/user/updateprofile", {method:"PUT", body:JSON.stringify(formData),headers:{"auth-token":token, "Content-Type":"application/json"}}) 
            const details = await response.json()
            console.log(details)
            setFormData(details.udetails)
            alert("profile updated")
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"server error"})
        }
    }

    return (
        <div style={{ backgroundColor: "aliceblue" }}>
            <Paper elevation={20} style={{ width: "500px", padding: "20px", marginTop: "50px", marginBottom: "50px", marginLeft: "370px" }}>
                <Typography variant='h4' style={{ fontFamily: "math", fontWeight: "bold", marginLeft: "100px" }}>UPDATE PROFILE</Typography>
                <TextField variant='outlined' label=' Name' name='name' type='Text' onChange={handleChange} value={formData.name} fullWidth style={{ marginBottom: "10px" }} />
                <TextField variant='outlined' label='Email' fullWidth name='email' type='Email' style={{ marginBottom: "10px" }} value={formData.email} onChange={handleChange} />
                {/* <TextField variant='outlined' label='Password' fullWidth name='password' type='password' style={{marginBottom:"10px"}} onChange={handleChange}/> */}
                <TextField variant='outlined' label='Phone ' fullWidth name='phone' type='Number' style={{ marginBottom: "10px" }} onChange={handleChange} value={formData.phone}/>
                <TextField variant='outlined' label='Address ' name='address' multiline rows={4} fullWidth style={{ marginBottom: "10px" }} onChange={handleChange} value={formData.address} />
                <Button variant='contained' fullWidth onClick={handleprofile}>Update</Button>
            </Paper>
        </div>
    )
}