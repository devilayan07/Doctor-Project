import { Box, Grid, Typography,CardMedia,CardContent,CardActions,Card,Button,CardActionArea } from '@mui/material'
import React from 'react'
import "./About.css"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { personalcareapi } from '../../../Api/Functions/personalcare.api';
import { childcareApi } from '../../../Api/Functions/childcare.api';


function About() {
    const{data:Personalcare}=useQuery({
        queryKey:["Personal-care"],
        queryFn:()=>personalcareapi()

    })
    console.log(Personalcare)

    const {data:Childcare}=useQuery({
        queryKey:["Child-Care"],
        queryFn:()=>childcareApi()
    })
    console.log(Childcare)
  return (
    <>
    <section className='about' id='about'>
    <Typography variant='h3' textAlign={"center"}>About Us</Typography>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"blue",paddingBottom:"20px"}}>
        <HomeIcon sx={{color:"blue"}}/>
            <Link to={"/"}><Typography variant='body1' ml={1} >Home</Typography></Link>
            
            <Typography ml={1}>/</Typography><InfoIcon sx={{color:"blue"}}/>
            <Link to={"/about"}> <Typography variant='body1' ml={1}>About</Typography>   </Link>
        </Box>
    </section>
  
    <Box sx={{marginTop:"20px"}}>
    <Typography variant='h4'>Personal Care</Typography>
    {
        Array.isArray(Personalcare) && Personalcare.map((item,index)=>     <Grid container  >
            {
                Array.isArray(item.doctor_id) && item.doctor_id.map((list,subindex)=>         <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
                <Card sx={{ marginTop: "20px", maxWidth: 350, height: "400px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200px"
                      image={`https://doctor-service.onrender.com/${list?.image}`} />
                    <CardContent>
                      <Typography variant='h6'  >{list?.name}</Typography>
                      <Typography variant="body2" sx={{ marginTop: "10px" }}>{list?.description.slice(0,150)} </Typography>
      
      
      
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ justifyContent: "center" }}>
                   <Link to={`/doctordetails/${list._id}`}> <Button variant='contained' size='small'>Read More</Button>  </Link>
                  </CardActions>
      
                </Card>
              </Grid>
        )

            }
      

  </Grid>
)
    }



      
    </Box>


    <Box sx={{marginTop:"20px"}}>
    <Typography variant='h4'>Child Care</Typography>
    {
        Array.isArray(Childcare) && Childcare.map((item,index)=>     <Grid container  >
            {
                Array.isArray(item.doctor_id) && item.doctor_id.map((list,subindex)=>         <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
                <Card sx={{ marginTop: "20px", maxWidth: 350, height: "400px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200px"
                      image={`https://doctor-service.onrender.com/${list?.image}`} />
                    <CardContent>
                      <Typography variant='h6'  >{list?.name}</Typography>
                      <Typography variant="body2" sx={{ marginTop: "10px" }}>{list?.description.slice(0,150)} </Typography>
      
      
      
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ justifyContent: "center" }}>
                   <Link to={`/doctordetails/${list._id}`}> <Button variant='contained' size='small'>Read More</Button>  </Link>
                  </CardActions>
      
                </Card>
              </Grid>
        )

            }
      

  </Grid>
)
    }



      
    </Box>







      
    </>
  )
}

export default About
