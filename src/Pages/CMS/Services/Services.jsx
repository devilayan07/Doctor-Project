import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { alldepartmentApi } from '../../../Api/Functions/alldepartment.api'
import { Box,Grid,Card,CardMedia,CardContent,Typography,CardActions,CardActionArea } from '@mui/material'

function Services() {
    const{
        data:Department
    }=useQuery({
        queryKey:["All-Department"],
        queryFn:()=>alldepartmentApi()
    })
    console.log(Department)
  return (
    <Box>
                    <Typography variant='h3'textAlign={"center"} sx={{marginTop:"80px",color:"#13C5DD"}}>Services</Typography>
                    <Typography variant='h4' textAlign={"center"} sx={{marginTop:"10px",color:"#1D2A4D"}}>Excellent Medical Services</Typography>
    <Grid container  >
      {
        Array.isArray(Department) && Department?.map((item, index) =>
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
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>{item?.description} </Typography>



                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>

              </CardActions>

            </Card>
          </Grid>
        )
      }

    </Grid>


      
    </Box>
  )
}

export default Services
