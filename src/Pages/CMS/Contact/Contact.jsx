import React from 'react'
import { Box, Typography,Grid,Button,TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createcontactapi } from '../../../Api/Functions/createcontact.api';
import { toast } from 'react-toastify';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import "./Contact.css"
import { Link } from 'react-router-dom';


function Contact() {
    const{register,handleSubmit,reset,formState:{errors}}=useForm()

    const{mutate}=useMutation({
        mutationFn:createcontactapi,
        onSuccess:(data)=>{
            if(data?.status===true){
                toast(data?.message)
                reset({name:"",email:"",topic:"",phone:"",msg:""});

            }
        }
    })

    const onSubmit=(data)=>{
        const data1={
            name:data.name,
            email:data.email,
            topic:data.topic,
            phone:data.phone,
            msg:data.msg
        }
        mutate(data1)
    }


  return (
    <>
                <section className='contact' id='contact'>
    <Typography variant='h3' textAlign={"center"}>Contact Us</Typography>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"blue",paddingBottom:"20px"}}>
        <HomeIcon sx={{color:"blue"}}/>
            <Link to={"/"}><Typography variant='body1' ml={1} >Home</Typography></Link>
            
            <Typography ml={1}>/</Typography><InfoIcon sx={{color:"blue"}}/>
            <Link to={"/about"}> <Typography variant='body1' ml={1}>About</Typography>   </Link>
        </Box>
    </section>

    <Box>
    <Grid container>
      <Grid item md={6} xs={12}>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <form >
          <TextField
          {...register("name",{required:"true"})}
            fullWidth
            id='name'
            label="Name"
            margin="normal"
            error={errors.name}
            helperText={errors.name && "Name is required"}
            required
          />

          <TextField
          {...register("email",{required:"true"})}
            fullWidth
            id='email'
            label="Email"
            margin="normal"
            error={errors.email}
            helperText={errors.email && "Email is required"}
            required
            type="email"
          />

                          <TextField
                          {...register("phone",{required:"true"})}
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  autoComplete="phone"
                  error={errors.phone}
                  helperText={errors.phone && "Phone is required"}
                />

<TextField
                          {...register("topic",{required:"true"})}
                  required
                  fullWidth
                  id="topic"
                  label="Topic"
                  helperText={errors.topic && "Topic is required"}
                  type='text'
                />



          <TextField
          {...register("msg",{required:"true"})}
            fullWidth
            label="Message"
            id='message'
            margin="normal"
            required
            multiline
            error={errors.msg}
            helperText={errors.msg && "Msg is required"}
            rows={4}
          />

          <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    

      </Grid>

      <Grid item xs={12} md={6} sx={{marginTop:"27px",backgroundColor:"#14A085"}}>
        <Box sx={{marginTop:"40px"}}>
        <Typography variant='h6'textAlign={"center"} sx={{color:"#F4F5F8"}}><LocationOnIcon sx={{color:"#F77D0A"}}/> Office</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>SaltLake Sector V,Kolkata,West Bengal</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <PhoneIcon sx={{color:"#F77D0A"}}/>Phone No</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>6290652764</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <MailIcon sx={{color:"#F77D0A"}}/>Customer Service</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>info@gmail.com</Typography>
        <Typography variant='h6' textAlign={"center"} sx={{color:"#F4F5F8"}}> <AccessTimeIcon sx={{color:"#F77D0A"}}/>Working Hours</Typography>
        <Typography variant='body1' textAlign={"center"} sx={{color:"white"}}>9AM To 7PM</Typography>

      </Box>







      </Grid>

    </Grid>
    <Grid container sx={{marginTop:"20px"}}>
      <Grid item xs={12} >
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3610229429755!2d88.36330207507633!3d22.528144979523386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d762bd16fd%3A0x50c3844ca79f2435!2sBallygunge%20Phari!5e0!3m2!1sen!2sin!4v1704605006795!5m2!1sen!2sin"  style={{width:"100%",height:"300px",border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0221913907435!2d88.42538367953938!3d22.578273326597976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b0bec3481d%3A0xe3a617d1a7f7d08f!2sHaldia%20petrochemicals%20Ltd.!5e0!3m2!1sen!2sin!4v1713713414443!5m2!1sen!2sin"  style={{width:"100%",height:"300px",border:"0"}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"   title="Google Maps of Haldia Petrochemicals Ltd."
  ></iframe>

      </Grid>
    </Grid>

    
    </Box>
    </>
  )
}

export default Contact
