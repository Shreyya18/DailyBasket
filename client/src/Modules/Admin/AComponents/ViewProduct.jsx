// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { border } from '@mui/system';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';


// const ViewProduct = () => {
//   const[products, setProducts]=useState([])

//   useEffect(()=>{
//     axios.get('http://localhost:7000/product/getproduct')
//     .then((res)=>{
//       console.log(res.data.allproducts)
//       setProducts(res.data.allproducts)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   })

//   const HandleDelete=(uid)=>{
//     axios.delete(`http://localhost:7000/product/deleteproduct/${uid}`)
//     .then((res)=>{
//       console.log(res)
//       alert("Product deleted")
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   }
//   return (
//     <div>
//       <TableContainer>
//       <Table >
//         <TableHead>
//           <TableRow>
//             <TableCell>Product Name</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Quantity</TableCell>
//             <TableCell>Product Description</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {products.map((product) => (
//             <TableRow key={product.product_name}>
//               <TableCell>{product.product_name}</TableCell>
//               <TableCell>{product.product_price}</TableCell>
//               <TableCell>{product.product_qty}</TableCell>
//               <TableCell>{product.product_description}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   )
// }

// export default ViewProduct

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { border } from '@mui/system';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function ViewProduct() {
  const [products, setProducts]=useState([]);


  useEffect(()=>{
    axios.get("http://localhost:7000/product/getproduct")
    .then((res)=>{
      console.log(res.data.allproducts);
      setProducts(res.data.allproducts)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  const HandleDelete=(uid)=>{
    axios.delete(`http://localhost:7000/product/deleteproduct/${uid}`)
    .then((res)=>{
        console.log(res)
        alert("Product Deleted")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">SL. NO</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Image</TableCell>
            {/* <TableCell align='right'>ACTION</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row,index) => (
            <TableRow
              key={row.product_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.product_name}</TableCell>
              <TableCell align="right">{row.product_price}</TableCell>
              <TableCell align="right">{row.product_qty}</TableCell>
              <TableCell align="right">{row.product_description}</TableCell>
              <TableCell align="right"><img src={`http://localhost:7000/image/${row.product_image}`} alt="" style={{width:"100px"}} /></TableCell>
              <TableCell align='right'>
                  <Button variant='outlined' component = {Link} to={`/Admin/UpdateProduct/${row._id}`}>UPDATE</Button>
                  <Button variant='outlined' onClick={()=>HandleDelete(row._id)} >DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
     