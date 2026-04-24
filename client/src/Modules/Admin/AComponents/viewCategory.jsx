import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom' ;
import { Button } from '@mui/material';

import { useState, useEffect } from 'react';
import axios from 'axios';


export default function ViewCategory() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('http://localhost:7000/category/getcategory')

      .then((res) => {
        console.log(res.data.allcategory)
        setCategories(res.data.allcategory)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleDelete = (uid) => {
    axios.delete(`http://localhost:7000/category/deletecategory/${uid}`)

      .then((res) => {
        alert("Category deleted")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>SL.NO</TableCell>
            <TableCell align='center'>CATEGOY NAME</TableCell>
            <TableCell align='center'>CATEGORY DESCRIPTION</TableCell>
            <TableCell align='center'>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">{index + 1}</TableCell>
              <TableCell align='center'>{row.category_name}</TableCell>
              <TableCell align='center'>{row.category_description}</TableCell>
              <TableCell align='center'>
                <Button variant='contained' component = {Link} to={`/Admin/UpdateCategory/${row._id}`}>UPDATE</Button>
                <Button variant='outlined' onClick={() => handleDelete(row._id)}>DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}