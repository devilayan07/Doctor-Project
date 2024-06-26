import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { featuredDoctor } from '../../../Api/Functions/featuredoctors.api'
import { Box,Grid,Card,CardMedia,CardContent,Typography,CardActions,CardActionArea } from '@mui/material'

function FeaturedDoctors() {
    const truncatedText = (text, maxLength) => {
        if (text.length > maxLength) {
            text = text.substring(0, maxLength);
            text = text.replace(/<[^>]*>/g, ''); 
            return text + "....";
        }
    }
    
    const{
        data:Featured
    }=useQuery({
        queryKey:["Featured-Doctors"],
        queryFn:()=>featuredDoctor()
    })
    console.log(Featured)
    
  return (
    <Box>
            <Typography variant='h3'textAlign={"center"} sx={{marginTop:"80px",color:"#13C5DD"}}>Our Specalist Doctors</Typography>
    <Grid container  >
      {
        Array.isArray(Featured) && Featured?.map((item, index) =>
          <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
            <Card sx={{ marginTop: "20px", maxWidth: 350, height: "370px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200px"
                  image={`https://doctor-service.onrender.com/${item?.image}`} />
                <CardContent>
                  <Typography variant='h5' component="div" textAlign="center">Name:{item?.name}</Typography>
                  {/* <Typography variant='h5' component="div" >Description:{item?.description}</Typography> */}
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>{truncatedText(item.description, 150)}
                  </Typography>



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

export default FeaturedDoctors
