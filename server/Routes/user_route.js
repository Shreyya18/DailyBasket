const express = require('express')
const {registeruser, getuser, getuserbyid, deleteuser, updateuser, Login, getprofile, updateprofile}= require('../Controller/user_controller')
const auth = require("../Middleware/Auth")


const route =express.Router();

route.post('/registeruser', registeruser)
route.get('/getuser', getuser)
route.get('/getuserbyid/:id', getuserbyid)
route.delete('deleteuser/:id', deleteuser)
route.put('/updateuser/:id', updateuser)
route.post('/Login', Login)
route.get('/getprofile', auth, getprofile)
route.put('/updateprofile', auth, updateprofile)
module.exports = route