// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

// export default function Products() {
//   const [expanded, setExpanded] = React.useState(false);
//   const [products, setProducts] = useState([]);
//   const [categories,setCategories] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState('All');


//   useEffect(() => {
//     axios.get("http://localhost:7000/product/getproduct")
//       .then((res) => {
//         console.log(res.data.allproducts);
//         setProducts(res.data.allproducts)
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   })

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const fetchCategories = async()=>{
//     try {
//       const res = await axios.get('http://localhost:7000/category/getcategory')
//       setCategories(res.data.allcategory);
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     fetchCategories();
//   }, []);

//   const filteredproducts = selectedCategory === "All" ?  products : products.filter((prod)=>prod.category_id === selectedCategory)

//   return (
//     <div style={{display: 'flex', flexWrap:'wrap', gap:'20px'}}>
//       <FormControl fullWidth>
//         <InputLabel>Category</InputLabel>
//         <Select label="Category" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
//         <MenuItem value="All">All</MenuItem>
//         {categories.map((cat)=>(
//           <MenuItem value={cat._id}>{cat.category_name}</MenuItem>
//         ))}
//         </Select>
//       </FormControl>
//       {filteredproducts.map((pdata) => (
//         <Card sx={{ maxWidth: 345 }}>
//           <CardHeader
//             avatar={
//               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                 R
//               </Avatar>
//             }
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title={pdata.product_name}
//             subheader="September 14, 2016"
//           />
//           <CardMedia
//             component="img"
//             height="194"
//             image={`http://localhost:7000/image/${pdata.product_image}`}
//             alt={pdata.product_name}
//           />
//           <CardContent>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               {pdata.product_description}
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
//             <ExpandMore
//               expand={expanded}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
//               <Typography sx={{ marginBottom: 2 }}>
//                 Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//                 aside for 10 minutes.
//               </Typography>
//               <Typography sx={{ marginBottom: 2 }}>
//                 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//                 medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//                 occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//                 large plate and set aside, leaving chicken and chorizo in the pan. Add
//                 pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//                 stirring often until thickened and fragrant, about 10 minutes. Add
//                 saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//               </Typography>
//               <Typography sx={{ marginBottom: 2 }}>
//                 Add rice and stir very gently to distribute. Top with artichokes and
//                 peppers, and cook without stirring, until most of the liquid is absorbed,
//                 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//                 mussels, tucking them down into the rice, and cook again without
//                 stirring, until mussels have opened and rice is just tender, 5 to 7
//                 minutes more. (Discard any mussels that don&apos;t open.)
//               </Typography>
//               <Typography>
//                 Set aside off of the heat to let rest for 10 minutes, and then serve.
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>
//       ))}
//     </div>


//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';

// MUI Components
import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Expand button styling
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch Products
  useEffect(() => {
    axios.get("http://localhost:7000/product/getproduct")
      .then((res) => {
        setProducts(res.data.allproducts);
      })
      .catch((error) => console.log(error));
  }, []);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:7000/category/getcategory');
      setCategories(res.data.allcategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Expand handler
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Filter products
  const filteredproducts =
    selectedCategory === "All"
      ? products
      : products.filter((prod) => prod.category_id === selectedCategory);

  return (
    <div style={{ padding: "20px" }}>

      {/* Category Filter */}
      <div style={{ width: "300px", marginBottom: "20px" }}>
        <FormControl fullWidth size="small">
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.category_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredproducts.map((pdata) => (
          <Card key={pdata._id} sx={{ borderRadius: "12px" }}>

            {/* Image */}
            <CardMedia
              component="img"
              height="180"
              image={`http://localhost:7000/image/${pdata.product_image}`}
              alt={pdata.product_name}
            />

            {/* Content */}
            <CardContent>
              <Typography variant="h6">
                {pdata.product_name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {pdata.product_description}
              </Typography>

              <Typography sx={{ marginTop: 1, fontWeight: "bold" }}>
                ₹ {pdata.product_price}
              </Typography>

              <Typography variant="caption">
                Qty: {pdata.product_qty}
              </Typography>
            </CardContent>

            {/* Actions */}
            <CardActions>
              <IconButton>
                <FavoriteIcon />
              </IconButton>

              <IconButton>
                <ShareIcon />
              </IconButton>

              <ExpandMore
                expand={expanded === pdata._id}
                onClick={() => handleExpandClick(pdata._id)}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            {/* Expand Section */}
            <Collapse in={expanded === pdata._id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2">
                  Additional product details can be shown here.
                </Typography>
              </CardContent>
            </Collapse>

          </Card>
        ))}
      </div>
    </div>
  );
}
