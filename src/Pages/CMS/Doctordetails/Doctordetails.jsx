import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { doctordetailsApi } from '../../../Api/Functions/doctordetails.api'
import { Box, Button, Container, Grid, Typography } from '@mui/material'


function Doctordetails() {
    const{id}=useParams()
    console.log(id)

    const{
        data:Doctordetail,
    }=useQuery({
        queryKey:["Doctordetails"],
        queryFn:()=>doctordetailsApi(id),
    })
    console.log(Doctordetail)

    const saveItem=(Doctordetail)=>{
      localStorage.setItem("departmentid",Doctordetail?.department_id?._id)
      localStorage.setItem("doctorid",Doctordetail?._id)



    }
  return (
    <Box sx={{marginTop:"65px"}}>
    {/* <Typography variant='h4' textAlign="center" sx={{marginTop:"10px"}}>About Us</Typography>
    <Typography variant='body2' textAlign="center" sx={{marginTop:"10px"}}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quod autem, ipsam est asperiores harum nesciunt quam numquam pariatur, veritatis, incidunt impedit veniam at. Eos perspiciatis facere similique animi vero.    </Typography> */}
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={6} xs={12}>
          <Box>
            <img src={`https://doctor-service.onrender.com/${Doctordetail?.image}`} alt="" style={{width:"300px", height:"400px", marginTop:"20px"}} />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box>
            <Typography variant='h3' sx={{marginTop:"30px"}}> Introducing to {Doctordetail?.name} </Typography>
          </Box>
          <Box>
            <Typography variant='h5' sx={{marginTop:"20px"}}> Department-{Doctordetail?.department_id?.departmentName}</Typography>
          </Box>
          <Box>
            <Typography variant='body2' sx={{marginTop:"20px"}}> {Doctordetail?.description} </Typography>
          </Box>
          <Box>
            <Typography variant='h5' sx={{marginTop:"20px"}}> Aperture Time:{Doctordetail?.aperture_time} </Typography>
          </Box>
          <Box>
            <Typography variant='h5' sx={{marginTop:"20px"}}> Departure Time:{Doctordetail?.departure_time} </Typography>
          </Box>

        <Link to={`/appointment/${Doctordetail?._id}`}><Button variant='contained' onClick={()=>saveItem(Doctordetail)} sx={{marginTop:"10px"}}>Get Appointment</Button></Link>
        </Grid>
      </Grid>
    </Container>
  </Box>
  
  )
}

export default Doctordetails
