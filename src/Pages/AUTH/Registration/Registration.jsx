import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Registerapi } from '../../../Api/Functions/register.api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Registration() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const[Image,setImage]=useState()

    const{mutate,isPending}=useMutation({
        mutationFn:Registerapi,
        onSuccess:(data)=>{
            if(data.success===true){
                toast(data?.message)
            }
        },
        onError: () => {
          toast.error("Registration failed. Please try again.");
        }
    
    })

    const onSubmit=(data)=>{
        const formdata=new FormData()
        formdata.append("name",data.name)
        formdata.append("phone",data.phone)
        formdata.append("email",data.email)
        formdata.append("password",data.password)
        formdata.append("forget",data.forget)
        formdata.append("image",data.image[0])
        mutate(formdata)
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                {...register("name",{required:true})}
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="name"
                  error={errors.name}
                  helperText={errors.name && "Name is required"}
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                {...register("phone",{required:true})}
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  error={errors.phone}
                  helperText={errors.phone && "Phone number is required"}
                  autoComplete="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("email",{required:true})}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  error={errors.email}
                  helperText={errors.email && "Email is required"}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("password",{required:true})}
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  error={errors.password}
                  helperText={errors.password && "Password is required"}
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                {...register("forget",{required:true})}
                  required
                  fullWidth
                  label="Confirm-password"
                  type="password"
                  id="password"
                  error={errors.forget}
                  helperText={errors.forget && "Password is required"}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
              {...register("image",{required:"true"})}
              variant='outlined'
              margin='normal'
              fullWidth
              type='file'
              error={!Image && !!errors.image}
              helperText={!Image && errors.image && "Image is required"}
              onChange={(e)=>setImage(e.target.files[0])}
              />

              {Image &&  (
                <img src={URL.createObjectURL(Image)} alt=""
                className="upload-img"
                style={{height:"180px"}}

                />
              ) }


              </Grid>


              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button> */}
                        {
              isPending ?             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Loading...
            </Button>


              :
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>


              
            }

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}