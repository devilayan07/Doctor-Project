// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link } from 'react-router-dom';
// import { profile } from '../../../Api/Axios/axiosInstance';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleLoggedout } from '../../../ReduxToolkit/AuthSlice';

// const pages = ["Home","About","Services","Department","Blog"];
// const settings = ['Profile', 'Account', 'Dashboard'];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const{isLoggedIn}=useSelector(state=>state.Auth)
//   const dispatch=useDispatch()

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const logout=()=>{
//    dispatch(handleLoggedout())
//   }

//   const Image=localStorage.getItem("image")
//   console.log(Image)

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center" component={Link} to={`/${page.toLowerCase()}`}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//                 component={Link}
//                 to={`/${page.toLowerCase()}`}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,marginRight:"10px" }}>
//                 <Avatar alt="Remy Sharp" src={`https://doctor-service.onrender.com/${Image}`}/>
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu} >
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//             {
//               isLoggedIn?(
//                 <Button
//                 component={Link}
//                 // onClick={Hello}
//                 variant='contained'
//                 to="/login"
//                 sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}
//                 onClick={()=>logout()}
//               >
//                 Logout
//               </Button>


//               ):
//               (
//                 <Button variant='contained' component={Link} to="/login" sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}>
//                 Login
//               </Button>


//               )
//             }

//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Header;

import React,{useState,useEffect} from 'react'
import { Grid,AppBar, Toolbar, Typography, Tabs, Tab, Box, Button,useTheme,useMediaQuery,MenuItem,Menu } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoggedout } from '../../../ReduxToolkit/AuthSlice';
import DrawerComp from '../../../Component/DrawerComp/DrawerComp';
// import image1 from "../../../img/Moto g54.jpg"
import image2 from "../../../img/03.jpg"

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const [authenticated, setAuthenticated] = useState(false);
    const{isLoggedIn}=useSelector(state=>state.Auth)
    const dispatch=useDispatch()
    console.log(isLoggedIn)
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthenticated(true);
      }
    }, [authenticated]);
    const[value,setValue]=useState()
    const name=localStorage.getItem("name")

    

    const theme=useTheme()
    console.log(theme)
    const isMatch=useMediaQuery(theme.breakpoints.down("md"))
    console.log(isMatch)

    const handleChange=((e,value)=>{
        setValue(value)

    })

    const logout=()=>{
      dispatch(handleLoggedout())
    }

  return (
    <>
    {
        isLoggedIn ?(
            <AppBar sx={{backgroundColor:"#FFFFFF"}}>
            <Toolbar>
              <img src={image2} alt="" style={{height:"50px",width:"50px"}} />
       
              { isMatch ? <>
               <Typography variant='h6' sx={{fontWeight:"700",marginLeft:"20px"}}>
                MED-CARE
                       </Typography>
       
                    <DrawerComp/>
               
              </> : <Grid sx={{placeItems:"center"}} container >
                   <Grid item xs={2}>
                       <Typography variant='h6' sx={{fontWeight:"700",marginLeft:"20px",color:"#13C5DD"}}>
                           MED-CARE
                       </Typography>
                   </Grid>
                   <Grid item xs={7} >
                       <Tabs sx={{marginLeft:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={handleChange}>
                           <Tab sx={{color:"#13C5DD"}} label="Home" to="/" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="About" to="/about" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="Department" to="/department" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="Doctors" to="/doctor" component={Link}/>

                           <Tab sx={{color:"#13C5DD"}} label="Blog" to="/blog" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="Contact" to="/contact" component={Link}/>





                           
                           <Typography sx={{color:"#13C5DD",paddingTop:"10px"}}>{name}</Typography>

    
    
            </Tabs>
                       </Grid>
                       <Grid item xs={1}>
                       {/* <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{marginLeft:"30px"}}
      >
       Dashboard 
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}

      >
                            <MenuItem onClick={() => {
                      handleClose();
                    }} component={Link} to="/dashboard">My profile</MenuItem>
                  </Menu>
 */}

<Button
  id="demo-positioned-button"
  aria-controls={open ? 'demo-positioned-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
  sx={{ marginLeft: "30px" }}
>
  Dashboard
</Button>
<Menu
  id="demo-positioned-menu"
  aria-labelledby="demo-positioned-button"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose} // Close the menu when the user clicks outside
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
>
  <MenuItem
    onClick={() => {
      handleClose(); // Close the menu on click
    }}
    component={Link}
    to="/dashboard" // This link will navigate to the dashboard
  >
    My profile
  </MenuItem>
</Menu>



                        </Grid>

                       {/* <Grid item xs={1}>
                        <img src={profile(photo)}alt="" 
                                            height={"50px"}
                                            width={"50px"}
                                            style={{ marginLeft: "auto", borderRadius: "50%" }}
                       
                                          
                                          />
    
    
    
                       </Grid> */}
                       
                       
                       
                      
       
                       <Grid item xs={2}>
                           <Box display="flex">
                           {/* <Button sx={{marginLeft:"auto",backgroundColor:"#F77D0A"}}variant='contained' component={Link} to="/login">Login</Button> */}
                           {isLoggedIn ? (
                     <Button
                       component={Link}
                       // onClick={Hello}
                       variant='contained'
                       to="/login"
                       sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}
                       onClick={()=>logout()}
                     >
                       Logout
                     </Button>
                   ) : (
                     <Button variant='contained' component={Link} to="/login" sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}>
                       Login
                     </Button>
                   )}
                           </Box>
       
       
                       </Grid>
                   </Grid>}
               
            </Toolbar>
           </AppBar>
    

        ):(
            <AppBar sx={{backgroundColor:"#FFFFFF"}}>
            <Toolbar>
       
              { isMatch ? <>
               <Typography variant='h6' sx={{fontWeight:"700",marginLeft:"20px"}}>
                MED-CARE
                       </Typography>
       
                    <DrawerComp/>
               
              </> : <Grid sx={{placeItems:"center"}} container >
                   <Grid item xs={2}>
                       <Typography variant='h6' sx={{fontWeight:"700",marginLeft:"20px",color:"#13C5DD"}}>
                        MED-CARE
                       </Typography>
                   </Grid>
                   <Grid item xs={6} >
                       <Tabs sx={{marginLeft:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={handleChange}>
                           <Tab sx={{color:"#13C5DD"}} label="Home" to="/" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="About" to="/about" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="Department" to="/department" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="Doctors" to="/doctor" component={Link}/>

                           <Tab sx={{color:"#13C5DD"}} label="Blog" to="/blog" component={Link}/>
                           <Tab sx={{color:"#13C5DD"}} label="Contact" to="/contact" component={Link}/>

    
    
    
            </Tabs>
                       </Grid>
                       
                       
                       
                      
       
                       <Grid item xs={3}>
                           <Box display="flex">
                           {/* <Button sx={{marginLeft:"auto",backgroundColor:"#F77D0A"}}variant='contained' component={Link} to="/login">Login</Button> */}
                           {isLoggedIn ? (
                     <Button
                       component={Link}
                       // onClick={Hello}
                       variant='contained'
                       to="/login"
                       sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}
                       onClick={()=>logout()}
                     >
                       Logout
                     </Button>
                   ) : (
                     <Button variant='contained' component={Link} to="/login" sx={{ backgroundColor: "#F77D0A",marginLeft:"auto" }}>
                       Login
                     </Button>
                   )}
                           </Box>
       
       
                       </Grid>
                   </Grid>}
               
            </Toolbar>
           </AppBar>
    

        )
    }

     
   


    

      
    
   </> 
  )
}

export default Header





