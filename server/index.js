const express = require('express');
const dbConnection = require('./db')
const cors = require('cors');

const app=express();

const PORT= 7000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

dbConnection();



app.use(cors("http://localhost:5173/"))
app.use(express.json())

app.use('/user', require('./Routes/user_route'))

app.use('/product', require('./Routes/product_route'))

app.use('/category', require('./Routes/category_route'))

app.use("/image", express.static("./Uploads"))