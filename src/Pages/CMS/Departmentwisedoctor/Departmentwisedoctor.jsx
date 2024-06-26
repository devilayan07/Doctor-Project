import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { deparmentwiseApi } from '../../../Api/Functions/departmentwisedoctor.api'
import "./Departmentwisedoctor.css"


import { Box,Grid,Card,CardMedia,CardContent,Typography,CardActions,CardActionArea, Button } from '@mui/material'


function Departmentwisedoctor() {
    const{id}=useParams()
    console.log(id)

    const{
        data:Doctors
    }=useQuery({
        queryKey:["Departmentwisedoctor"],
        queryFn:()=>deparmentwiseApi(id)
    })
    console.log(Doctors)
  return (
    <>
                <section className='departmentwise' id='departmentwise'>
    <Box>
      <Typography variant='h3' textAlign={"center"} >Departmentwise Doctors</Typography>
    </Box>


    </section>

    <Box>
                    <Typography variant='h3'textAlign={"center"} sx={{marginTop:"80px",color:"#13C5DD"}}>Select Doctor</Typography>
                    {/* <Typography variant='h4' textAlign={"center"} sx={{marginTop:"10px",color:"#1D2A4D"}}>Health Care Solutions</Typography> */}
    <Grid container  >
      {
        Array.isArray(Doctors) && Doctors?.map((item, index) =>
          <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
            <Card sx={{ marginTop: "20px", maxWidth: 350, height: "400px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200px"
                  image={`https://doctor-service.onrender.com/${item?.image}`} />
                <CardContent>
                  <Typography variant='h6'  >{item?.name}</Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>{item?.description.slice(0,150)} </Typography>



                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
               <Link to={`/doctordetails/${item._id}`}> <Button variant='contained' size='small'>Make Appointment</Button>  </Link>
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

export default Departmentwisedoctor
