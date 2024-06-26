import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { singleblogApi } from '../../../Api/Functions/singleblog.api'
import { Box, Button, Card, CardContent, CardMedia, Container,  Grid,  TextField, Typography } from '@mui/material'
import { singleblogcommentApi } from '../../../Api/Functions/singleblogcomment.api'
import EmailIcon from '@mui/icons-material/Email';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useForm } from 'react-hook-form'
import { createcommentApi } from '../../../Api/Functions/createcomment.api'
import { toast } from 'react-toastify'
import { queryClient } from './../../../index';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import "./Blogdetails.css"



function Blogdetails() {
    const{register,handleSubmit,reset,formState:{errors}}=useForm()
    const{id}=useParams()
    console.log(id)


    const{data:Singleblog}=useQuery({
        queryKey:["Singleblog"],
        queryFn:()=>singleblogApi(id)
        
    })
    console.log(Singleblog)

    const{data:Singlecomments}=useQuery({
        queryKey:["SingleComment"],
        queryFn:()=>singleblogcommentApi(id)
    })
    console.log(Singlecomments)

    const{mutate}=useMutation({
        mutationFn:createcommentApi,
        onSuccess:async(data)=>{
            if(data.status===200){
                await queryClient.invalidateQueries("comment");

                toast(data?.message)
                reset({ comment: '' });

            }
        }
        
    })

    const onSubmit=(data)=>{
        const data1={
            comment:data.comment,
            user_id:localStorage.getItem("userid"),
            blog_Id:localStorage.getItem("blogid")

            

        }
        mutate(data1) 
    }

  return (
    <>
            <section className='blogdetails' id='blogdetails'>
    <Typography variant='h3' textAlign={"center"}>Blog Details</Typography>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"blue",paddingBottom:"20px"}}>
        <HomeIcon sx={{color:"blue"}}/>
            <Link to={"/"}><Typography variant='body1' ml={1} >Home</Typography></Link>
            
            <Typography ml={1}>/</Typography><InfoIcon sx={{color:"blue"}}/>
            <Link to={"/about"}> <Typography variant='body1' ml={1}>About</Typography>   </Link>
        </Box>
    </section>

    <Box >
    < Container sx={{ marginTop: "80px" }}>
        <Card>
            <CardMedia component="img"
                alt=''
                image={`https://doctor-service.onrender.com/${Singleblog?.image}`}
                sx={{ height: "300px", objectFit: "cover" }}

            />
            <CardContent>
                <Typography variant='h5' textAlign="center">
                    {Singleblog?.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ marginTop: "10px" }}
                > {Singleblog?.description}  </Typography>

            </CardContent>
        </Card>
        </Container>
        </Box>

<Box sx={{ marginTop: "20px", marginLeft: "10px", overflowX: "hidden" }}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={12}>
            {
                Array.isArray(Singlecomments) && Singlecomments.map((item, index) => (
                    <Box key={index} component="div" sx={{ height: "150px", width: "100%", border: "1px solid black", marginBottom: "10px", boxSizing: "border-box" }}>
                        <Typography variant='h6'>Name: {item.user_id.name}</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <EmailIcon sx={{ color: "red" }} />
                            <Typography>{item.user_id.email}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <MapsUgcIcon sx={{ color: "blue" }} />
                            <Typography>{item?.comment}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <AccessTimeIcon />
                            <Typography>{item?.updatedAt}</Typography>
                        </Box>
                    </Box>
                ))
            }
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
            <Box sx={{ height: "150px", width:"100%",boxSizing:"border-box", border: "1px solid black", display:"flex",flexDirection:"column" }}>
                <Typography>Write Comment</Typography>
                <TextField
                    {...register("comment", { required: "true" })}
                    label="Comment here"
                    margin="normal"
                    required
                    error={errors.comment}
                    helperText={errors.comment && "Comment is required"}
                    multiline
                    sx={{height:"100px",width:"500px",margin:"0 auto"}}
                />
                <Button variant='contained' sx={{height:"50px",width:"150px",margin:"0 auto",marginBottom:"20px"}} onClick={handleSubmit(onSubmit)} >Submit</Button>
            </Box>
        </Grid>
    </Grid>
</Box>



        </>

  )
}

export default Blogdetails
