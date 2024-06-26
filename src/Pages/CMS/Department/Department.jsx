import React from 'react'
import "./Department.css"
import { useQuery } from '@tanstack/react-query'
import { alldepartmentApi } from '../../../Api/Functions/alldepartment.api'
import { Box,Grid,Card,CardMedia,CardContent,Typography,CardActions,CardActionArea, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';



function Department() {
  const{
    data:Departments,

  }=useQuery({
    queryKey:["Deparments"],
    queryFn:()=>alldepartmentApi()
  })
  console.log(Departments)
  return (
    <>
            <section className='department' id='department'>
    <Box>
      <Typography variant='h3' textAlign={"center"} >All Department</Typography>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"blue",paddingBottom:"20px"}}>
        <HomeIcon sx={{color:"blue"}}/>
            <Link to={"/"}><Typography variant='body1' ml={1} >Home</Typography></Link>
            
            <Typography ml={1}>/</Typography><InfoIcon sx={{color:"blue"}}/>
            <Link to={"/about"}> <Typography variant='body1' ml={1}>About</Typography>   </Link>
        </Box>

    </Box>

    </section>
    <Box>
                    <Typography variant='h3'textAlign={"center"} sx={{marginTop:"80px",color:"#13C5DD"}}>All Department</Typography>
                    <Typography variant='h4' textAlign={"center"} sx={{marginTop:"10px",color:"#1D2A4D"}}>Health Care Solutions</Typography>
    <Grid container  >
      {
        Array.isArray(Departments) && Departments?.map((item, index) =>
          <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
            <Card sx={{ marginTop: "20px", maxWidth: 350, height: "400px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200px"
                  image={`https://doctor-service.onrender.com/${item?.image}`} />
                <CardContent>
                  <Typography variant='h6'  >Department Name:{item?.departmentName}</Typography>
                  {/* <Typography variant='h5' component="div" >Description:{item?.description}</Typography> */}
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>{item?.description.slice(0,150)} </Typography>



                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
               <Link to={`/department/${item._id}`}> <Button variant='contained' size='small'>Make Appointment</Button>  </Link>
              </CardActions>

            </Card>
          </Grid>
        )
      }

    </Grid>


      
    </Box>

    
      
    </>
  )
}

export default Department

