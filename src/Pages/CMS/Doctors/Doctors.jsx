import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { alldoctorsApi } from '../../../Api/Functions/alldoctors.api'
import { Box, Grid, Typography,CardMedia,CardContent,CardActions,Card,Button,CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import "./Doctors.css"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';



function Doctors() {
    const{data:Alldoctors}=useQuery({
        queryKey:["Alldoctors"],
        queryFn:()=>alldoctorsApi()
    })
    console.log(Alldoctors)
  return (
    <>
        <section className='doctor' id='doctor'>
    <Typography variant='h3' textAlign={"center"}>All Doctors</Typography>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"blue",paddingBottom:"20px"}}>
        <HomeIcon sx={{color:"blue"}}/>
            <Link to={"/"}><Typography variant='body1' ml={1} >Home</Typography></Link>
            
            <Typography ml={1}>/</Typography><InfoIcon sx={{color:"blue"}}/>
            <Link to={"/about"}> <Typography variant='body1' ml={1}>About</Typography>   </Link>
        </Box>
    </section>


<Box>
    <Typography variant='h5' textAlign={"center"} sx={{marginTop:"20px"}}>All Doctors</Typography>
    <Grid container>
        {
            Array.isArray(Alldoctors) && Alldoctors.map((item,index)=> <Grid item xs={12} md={4} sm={6}>
                                <Card sx={{ marginTop: "20px", maxWidth: 350, height: "450px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200px"
                      image={`https://doctor-service.onrender.com/${item?.image}`} />
                    <CardContent>
                      <Typography variant='h6'  >{item?.name}</Typography>
                      {
                        Array.isArray(item.department_details) && item.department_details.map((list,index)=> <Typography sx={{marginTop:"10px",color:"#13C5DD"}}>{list?.departmentName}</Typography> )
                      }
                      <Typography variant="body2" sx={{ marginTop: "10px" }}>{item?.description.slice(0,150)} </Typography>
      
      
      
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ justifyContent: "center" }}>
                   <Link to={`/doctordetails/${item._id}`}> <Button variant='contained' size='small'>Read More</Button>  </Link>
                  </CardActions>
      
                </Card>


            </Grid>)
        }
    </Grid>

</Box>

    </>
  )
}

export default Doctors
