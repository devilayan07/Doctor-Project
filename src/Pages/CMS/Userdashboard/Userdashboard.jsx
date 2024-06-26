import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { dashboardapi } from '../../../Api/Functions/dashboard.api'
import { Container,Box,Typography,Grid } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";


function Userdashboard() {
    const userid=localStorage.getItem("userid")
    const {data:Dashboard}=useQuery({
        queryKey:["UserDashboard"],
        queryFn:()=>dashboardapi(userid)
    })
    console.log(Dashboard)
    const Name=localStorage.getItem("name")
    const Email=localStorage.getItem("email")
     const Phone=  localStorage.getItem("phone")
  return (
    <>
    <Box sx={{ paddingTop: "10px", paddingBottom: "50px",display:"flex",justifyContent:"center" }}>
    <Container>
      <Grid
        container
        sx={{
          height: "400px",
          // width: "200px",
          // margin: "0 auto",
          border: "2px solid white",
          justifyContent:"center",
          alignItems:"center",
          gap:"10px"
        }}
      >
                        <Grid
              item
              lg={6}
              sx={{ backgroundColor: "#cb2d1b", textAlign: "center" }}
            >
              {/* <img
                src={image(item?.image)}
                alt=""
                height={"200px"}
                width={"200px"}
                style={{ marginTop: "20px", borderRadius: "50%" }}
              /> */}
              <Box sx={{ marginTop: "30px" }}>
                <Typography variant="h5" color={"whitesmoke"}>
                  Name:{Name} 
                </Typography>
                <Typography variant="h6" color={"whitesmoke"}>
                  Email Id:{Email}
                </Typography>
                <Typography variant="h6" color={"whitesmoke"}>
              Phone:{Phone}
            </Typography>

  
  
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Typography sx={{ paddingLeft: "8px" ,color:"whitesmoke"}}>
                  <FacebookIcon />
                </Typography>
                <Typography sx={{ paddingLeft: "8px",color:"whitesmoke" }}>
                  <TwitterIcon />
                </Typography>
                <Typography sx={{ paddingLeft: "8px",color:"whitesmoke"}}>
                  <InstagramIcon />
                </Typography>
              </Box>
            </Grid>
    
          </Grid>
        </Container>
        </Box>

        <Box>
          <table style={{width:"100%"}}>
            <tr>
              <th>Doctor</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
            <tbody>
              {
                Array.isArray(Dashboard) && Dashboard.map((item,index)=> <tr key={index}>
                 <td>
                                <img
                src={`https://doctor-service.onrender.com/${item?.doctor_id?.image}`}
                alt=""
                height={"100px"}
                width={"100px"}
                style={{ marginTop: "20px", borderRadius: "50%" }}
              />
              <Typography variant='body2'> {item?.doctor_id?.name} </Typography>

                 </td>
                 <td>
                  <Typography>{item?.department_id?.departmentName}</Typography>
                 </td>
                 <td>
                  <Typography>{item?.phone}</  Typography>
                 </td>
                 <td>
                 <Typography>{item?.doctor_id?.aperture_time}-{item?.doctor_id?.departure_time}</  Typography>

                 </td>
                 <td><Typography>Confirmed</Typography></td>
                </tr>  )
              }
            </tbody>
          </table>
        </Box>
        </>

  )
}

export default Userdashboard
