import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Card,
  Box,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { allblogApi } from "../../../Api/Functions/allblog.api";
import { recentblogApi } from "../../../Api/Functions/recentblog.api";
import { searchblogApi } from "../../../Api/Functions/searchblog.api";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import "./Blog.css";

function Blog() {
  const [output, setOutput] = useState("");
  const [selectedpost, setSelectedPost] = useState(null);
  // const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  const { data: Blogs } = useQuery({
    queryKey: ["Blog-data"],
    queryFn: () => allblogApi(),
  });

  const { data: RecentBlog } = useQuery({
    queryKey: ["RecentBlog"],
    queryFn: () => recentblogApi(),
  });

  const handlerecentBlog = (item) => {
    console.log(item);
    setSelectedPost([item]);
    setPage(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await searchblogApi(output);
      console.log(data);
      setSelectedPost(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // setInput(output);
    setOutput("");
  };

  const handleChange = (e) => {
    setOutput(e.target.value);
  };

  const handleItem = (item) => {
    localStorage.setItem("blogid", item._id);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedData = Blogs?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const displayData = selectedpost ? selectedpost : paginatedData;

  return (
    <>
      <section className="blog" id="blog">
        <Typography variant="h3" textAlign={"center"}>
          All Blogs
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "blue",
            paddingBottom: "20px",
          }}
        >
          <HomeIcon sx={{ color: "blue" }} />
          <Link to={"/"}>
            <Typography variant="body1" ml={1}>
              Home
            </Typography>
          </Link>

          <Typography ml={1}>/</Typography>
          <InfoIcon sx={{ color: "blue" }} />
          <Link to={"/about"}>
            <Typography variant="body1" ml={1}>
              About
            </Typography>
          </Link>
        </Box>
      </section>

      <Container sx={{ marginTop: "50px" }}>
        <Grid container>
          <Grid item md={8} xs={12}>
            {Array.isArray(displayData) &&
              displayData.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginTop: "30px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={item.title}
                    image={`https://doctor-service.onrender.com/${item?.image}`}
                    sx={{ height: 450, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                      sx={{ fontWeight: "600" }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "15px" }}
                    >
                      {item?.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      variant="contained"
                      component={Link}
                      to={`/blogdetails/${item?._id}`}
                      onClick={() => handleItem(item)}
                    >
                      Read More.....
                    </Button>
                  </CardActions>
                </Card>
              ))}

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              {Blogs && Blogs.length !== 0 && !selectedpost && (
                <Pagination
                  count={Math.ceil(Blogs.length / itemsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              )}
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                flexDirection: "column",
              }}
            >
              <form className="form-container" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="input"
                  id="input"
                  value={output}
                  onChange={handleChange}
                />
                <br />
                <button
                  type="submit"
                  style={{
                    marginLeft: "15px",
                    marginTop: "10px",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Search
                </button>
              </form>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ marginLeft: "120px", marginTop: "20px" }}
              >
                Recent Blogs
              </Typography>
              {Array.isArray(RecentBlog) &&
                RecentBlog.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      marginLeft: "60px",
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <img
                      src={`https://doctor-service.onrender.com/${item?.image}`}
                      alt=""
                      style={{ height: "80px", width: "100px" }}
                    />
                    <Button onClick={() => handlerecentBlog(item)}>
                      {item.title}
                    </Button>
                  </div>
                ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Blog;




// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Button,
//   CardActions,
//   Typography,
//   CardContent,
//   CardMedia,
//   Card,
//   Box,
//   Pagination,
// } from "@mui/material";
// import { Link, useSearchParams, useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { allblogApi } from "../../../Api/Functions/allblog.api";
// import { recentblogApi } from "../../../Api/Functions/recentblog.api";
// import { searchblogApi } from "../../../Api/Functions/searchblog.api";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import "./Blog.css";

// function Blog() {
//   const [output, setOutput] = useState("");
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const page = parseInt(searchParams.get("page") || "1", 10);
//   const itemsPerPage = 2;

//   const { data: Blogs } = useQuery({
//     queryKey: ["Blog-data"],
//     queryFn: () => allblogApi(),
//   });

//   const { data: RecentBlog } = useQuery({
//     queryKey: ["RecentBlog"],
//     queryFn: () => recentblogApi(),
//   });

//   useEffect(() => {
//     if (page < 1) setSearchParams({ page: "1" });
//   }, [page, setSearchParams]);

//   const handlerecentBlog = (item) => {
//     setSelectedPost([item]);
//     setSearchParams({ page: "1" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await searchblogApi(output);
//       setSelectedPost(data);
//       navigate("?page=1"); // Reset to first page on search
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     // setInput(output);
//     setOutput("");
//   };

//   const handleChange = (e) => {
//     setOutput(e.target.value);
//   };

//   const handleItem = (item) => {
//     localStorage.setItem("blogid", item._id);
//   };

//   const handlePageChange = (event, value) => {
//     setSearchParams({ page: value.toString() });
//   };

//   const paginatedData = Blogs?.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const displayData = selectedPost ? selectedPost : paginatedData;

//   return (
//     <>
//       <section className="blog" id="blog">
//         <Typography variant="h3" textAlign={"center"}>
//           All Blogs
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: "blue",
//             paddingBottom: "20px",
//           }}
//         >
//           <HomeIcon sx={{ color: "blue" }} />
//           <Link to={"/"}>
//             <Typography variant="body1" ml={1}>
//               Home
//             </Typography>
//           </Link>

//           <Typography ml={1}>/</Typography>
//           <InfoIcon sx={{ color: "blue" }} />
//           <Link to={"/about"}>
//             <Typography variant="body1" ml={1}>
//               About
//             </Typography>
//           </Link>
//         </Box>
//       </section>

//       <Container sx={{ marginTop: "50px" }}>
//         <Grid container>
//           <Grid item md={8} xs={12}>
//             {Array.isArray(displayData) &&
//               displayData.map((item, index) => (
//                 <Card
//                   key={index}
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     marginTop: "30px",
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     alt={item.title}
//                     image={`https://doctor-service.onrender.com/${item?.image}`}
//                     sx={{ height: 450, objectFit: "cover" }}
//                   />
//                   <CardContent>
//                     <Typography
//                       gutterBottom
//                       variant="h5"
//                       component="div"
//                       textAlign="center"
//                       sx={{ fontWeight: "600" }}
//                     >
//                       {item.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{ marginLeft: "15px" }}
//                     >
//                       {item?.description}
//                     </Typography>
//                   </CardContent>
//                   <CardActions sx={{ justifyContent: "center" }}>
//                     <Button
//                       size="small"
//                       variant="contained"
//                       component={Link}
//                       to={`/blogdetails/${item._id}`}
//                       onClick={() => handleItem(item)}
//                     >
//                       Read More.....
//                     </Button>
//                   </CardActions>
//                 </Card>
//               ))}

//             <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//               {Blogs && Blogs.length !== 0 && !selectedPost && (
//                 <Pagination
//                   count={Math.ceil(Blogs.length / itemsPerPage)}
//                   page={page}
//                   onChange={handlePageChange}
//                   color="primary"
//                 />
//               )}
//             </Box>
//           </Grid>
//           <Grid item md={4} xs={12}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: "30px",
//                 flexDirection: "column",
//               }}
//             >
//               <form className="form-container" onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="input"
//                   id="input"
//                   value={output}
//                   onChange={handleChange}
//                 />
//                 <br />
//                 <button
//                   type="submit"
//                   style={{
//                     marginLeft: "59px",
//                     marginTop: "10px",
//                     backgroundColor: "green",
//                     color: "white",
//                   }}
//                 >
//                   Search
//                 </button>
//               </form>
//             </Box>
//             <Box>
//               <Typography
//                 variant="h6"
//                 sx={{ marginLeft: "120px", marginTop: "20px" }}
//               >
//                 Recent Blogs
//               </Typography>
//               {Array.isArray(RecentBlog) &&
//                 RecentBlog.map((item, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       marginLeft: "60px",
//                       marginTop: "20px",
//                       display: "flex",
//                     }}
//                   >
//                     <img
//                       src={`https://doctor-service.onrender.com/${item?.image}`}
//                       alt=""
//                       style={{ height: "80px", width: "100px" }}
//                     />
//                     <Button onClick={() => handlerecentBlog(item)}>
//                       {item.title}
//                     </Button>
//                   </div>
//                 ))}
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={9}></Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default Blog;







// import React, {useState } from 'react'
// import { Container, Grid, Button, CardActions, Typography, CardContent, CardMedia, Card,Box, Pagination } from '@mui/material'
// import { Link } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { allblogApi } from '../../../Api/Functions/allblog.api'
// import { recentblogApi } from '../../../Api/Functions/recentblog.api'
// import { searchblogApi } from '../../../Api/Functions/searchblog.api'
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import "./Blog.css"



// function Blog() {
//   const[output,setOutput]=useState("")
//   const[selectedpost,setSelectedPost]=useState(null)
//   const[filteredblogs,setfilteredBlogs]=useState([])

//   const [page, setPage] = useState(1);
//   const itemsPerPage = 2;




//     const{
//         data:Blogs
//     }=useQuery({
//         queryKey:["Blog-data"],
//         queryFn:()=>allblogApi(),
    
//     })
  

//     const{
//         data:RecentBlog
//     }=useQuery({
//         queryKey:["RecentBlog"],
//         queryFn:()=>recentblogApi()
//     })
//     console.log(RecentBlog)

//     const handlerecentBlog=(item)=>{
//       setSelectedPost(item._id)
//       setfilteredBlogs([item])
//       setPage(1)

//     }

//     const{data:SearchBlog}=useQuery({
//       queryKey:["SearchBlogdata",output],
//       queryFn:()=>searchblogApi(output)
//     })
//     console.log(SearchBlog)

//     const handleSubmit=(e)=>{
//       e.preventDefault()
//       setOutput("")
//     }
//     const handleChange=(e)=>{
//       setOutput(e.target.value)
//     }

//     const handleItem=(item)=>{
//       localStorage.setItem("blogid",item._id)
//     }

//     const handlePageChange = (event, value) => {
//       setPage(value);
//     };
  
//     const paginatedData=Blogs?.slice(
//       (page-1)*itemsPerPage,
//       page*itemsPerPage
//     )
//     console.log(paginatedData)
//     const displayData = selectedpost ? filteredblogs:paginatedData

  







//   return(
//     <>
//         <section className='blog' id='blog'>
//     <Typography variant='h3' textAlign={"center"}>All Blogs</Typography>

//         <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"blue",paddingBottom:"20px"}}>
//         <HomeIcon sx={{color:"blue"}}/>
//             <Link to={"/home"}><Typography variant='body1' ml={1} >Home</Typography></Link>
            
//             <Typography ml={1}>/</Typography><InfoIcon sx={{color:"blue"}}/>
//             <Link to={"/about"}> <Typography variant='body1' ml={1}>About</Typography>   </Link>
//         </Box>
//     </section>

//       <Container sx={{marginTop:"50px"}}>
//         <Grid container>
//           <Grid item md={8} xs={12}>
//                   {
//                    Array.isArray(displayData) && displayData?.map((item, index) => <Card
//                       key={index}
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "space-between",
//                         marginTop: "30px",
//                       }}
//                     >
//                       <CardMedia
//                         component="img"
//                         alt={item.title}
//                          image={`https://doctor-service.onrender.com/${item?.image}`}
//                         sx={{ height: 450, objectFit: "cover" }}
//                       />
//                       <CardContent>
//                         <Typography
//                           gutterBottom
//                           variant="h5"
//                           component="div"
//                           textAlign="center"
//                           sx={{ fontWeight: "600" }}
//                         >
//                           {item.title}
//                         </Typography>
//                         <Typography
//                           // dangerouslySetInnerHTML={{ __html: item.postText }}
//                           variant="body2"
//                           sx={{ marginLeft: "15px" }}
//                         >
//                             {item?.description}
//                         </Typography>
//                       </CardContent>
//                       <CardActions sx={{ justifyContent: "center" }}>
//                         {/* <Link to={`/blogdetails/${item._id}`}> <Button
//                           size="small"
//                           variant='contained'
//                           onClick={()=>handleItem(item)}
//                         >
//                           Read More.....
//                         </Button></Link> */}
//                           <Button
//                           size="small"
//                           variant='contained'
//                           component={Link}
//                           to={`/blogdetails/${item._id}`}
//                           onClick={()=>handleItem(item)}

//                         >
//                           Read More.....
//                         </Button>
//                       </CardActions>
//                     </Card>
//                     )
//                   }

// <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//   {
//     Blogs && Blogs.length!==0 &&(
//       <Pagination
     
//                           count={Math.ceil(Blogs.length / itemsPerPage)}
//                           page={page}
//                           onChange={handlePageChange}
//                           color="primary"
//                         />


//     )
//   }

//             </Box>

            
//           </Grid>
//           <Grid item md={4} xs={12}>
//             <Box sx={{display:"flex",justifyContent:"center",alignItems: "center",marginTop:"30px",flexDirection: "column",}}>
//             <form className="form-container" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="input"
//                 id="input"
//                 value={output}
//                 onChange={handleChange}
//                 // style={{width:"60%"}}
//               />
//               <br />
//               <button type="submit" style={{marginLeft:"59px",marginTop:"10px",backgroundColor:"green",color:"white"}}>
//                 Search
//               </button>

//             </form>
//           </Box> 
//           <Box>
//             <Typography variant='h6' sx={{marginLeft:"120px",marginTop:"20px"}}>
//               Recent Blogs
//             </Typography>
//             {
//               Array.isArray(RecentBlog) && RecentBlog.map((item,index)=> <div  style={{marginLeft:"60px",marginTop:"20px",display:"flex"}}>
//                 <img src={`https://doctor-service.onrender.com/${item?.image}`} alt="" style={{height:"80px",width:"100px"}}/>
//                 <Button onClick={()=>handlerecentBlog(item)}>{item.title}</Button>
//               </div> )
//             }
//           </Box>

//           </Grid> 
//           <Grid item xs={12} sm={9}>

//         </Grid>

//         </Grid>
//       </Container> 


//     </>
//   )
// }

// export default Blog





