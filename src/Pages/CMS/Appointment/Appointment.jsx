import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import "./Appointment.css"

import {  useNavigate, useParams } from 'react-router-dom'
import { appointmentapi } from '../../../Api/Functions/appointment.api'
import { toast } from 'react-toastify'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { doctordetailsApi } from '../../../Api/Functions/doctordetails.api'

function Appointment() {
    const{id}=useParams()
    console.log(id)
    const{register,handleSubmit,setValue,formState:{errors}}=useForm()
    const[form,setFormData]=useState({})
    const userName=localStorage.getItem("name")
    const navigate=useNavigate()

    useEffect(()=>{
      const fetchData=async()=>{
        try {
          let response=await doctordetailsApi(id)
          setFormData(response)

          console.log(response,"data")
          
        } catch (error) {
          console.log(error)
          
        }
      };
      fetchData()
    },[id])

    const{mutate}=useMutation({
        mutationKey:"appointment",
        mutationFn:appointmentapi,
        onSuccess:(data)=>{
            if(data?.status===true){
                toast.success(data?.message)
                navigate("/dashboard")
            }
        },
        onError: () => {
          toast.error("please enter the field correctly");
        }


    })

    const onSubmit=(data)=>{
      const data1={
        phone:data.phone,
        message:data.message,
        user_id:localStorage.getItem("userid"),
        department_id:localStorage.getItem("departmentid"),
        doctor_id:localStorage.getItem("doctorid"),
      }
      mutate(data1)


    }
   
    useEffect(() => {
      setValue("phone",form?.phone)
      setValue("message",form?.message)
    }, [form, setValue]);
  

  return (
    <section className='appointment' id='appointment'>
    <Box>
      <Grid container>
        {/* <Grid item md={6} >
          <Typography variant='h5' textAlign={"center"} sx={{marginTop:"140px"}}>APPOINTMENT</Typography>
          <Typography variant='h3' sx={{marginTop:"20px"}}>Make An Appointment For Your Family</Typography>
          <Typography variant='body2' sx={{marginTop:"30px" }}>Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui distinctio, adipisci iusto vero deserunt maiores commodi pariatur minus vitae illo magni tempora animi perferendis. Dicta voluptas consequuntur optio numquam.   </Typography>
        </Grid> */}
        <Grid item md={12}>
          <Box component="form" sx={{maxWidth:"600px",mx:"auto",p:2}}>
            <Typography variant='h4' textAlign={"center"} sx={{marginTop:"70px"}}>Book An Appointment</Typography>
            <Grid container spacing={2} sx={{marginTop:"20px"}}>
              <Grid item xs={12} md={6}>
                <TextField
                 fullWidth
                 type='text'
                 label="Department"
                 value={form?.department_id?.departmentName}
                 sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '& .MuiInputBase-input': { color: '#333333' },
                  '& .MuiInputLabel-root': { color: '#13C5DD' },
                  '& .MuiFormHelperText-root': { color: '#FF6347' },
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#13C5DD',
                  },
              }}
    

                 />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                 fullWidth
                 label="Doctor"
                 type='text'
                 value={form?.name}
                 sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '& .MuiInputBase-input': { color: '#333333' },
                  '& .MuiInputLabel-root': { color: '#13C5DD' },
                  '& .MuiFormHelperText-root': { color: '#FF6347' },
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#13C5DD',
                  },
              }}
    
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <TextField
                  fullWidth
                  id="name"
                  label="Your Name"
                  value={userName}
                  autoFocus
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    '& .MuiInputBase-input': { color: '#333333' },
                    '& .MuiInputLabel-root': { color: '#13C5DD' },
                    '& .MuiFormHelperText-root': { color: '#FF6347' },
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#13C5DD',
                    },
                }}
      

                />

              
              </Grid>
            <Grid item xs={12} md={6}>
              <TextField
              {...register("phone",{required:true})}
                required
                fullWidth
                type='number'
                id='number'
                label="Phone No"
                error={errors.phone}
                helperText={errors.phone && "Phone number is required"}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '& .MuiInputBase-input': { color: '#333333' },
                  '& .MuiInputLabel-root': { color: '#13C5DD' },
                  '& .MuiFormHelperText-root': { color: '#FF6347' },
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#13C5DD',
                  },
              }}
    
              />
            
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
              fullWidth
              type='text'
              label="Date"
              value={form?.date?.slice(0,10)}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '& .MuiInputBase-input': { color: '#333333' },
                '& .MuiInputLabel-root': { color: '#13C5DD' },
                '& .MuiFormHelperText-root': { color: '#FF6347' },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#13C5DD',
                },
            }}
  
              
              />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
            fullWidth
            label="Appointment Time"
            value={`${form?.aperture_time}-${form?.departure_time}`}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '& .MuiInputBase-input': { color: '#333333' },
              '& .MuiInputLabel-root': { color: '#13C5DD' },
              '& .MuiFormHelperText-root': { color: '#FF6347' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#13C5DD',
              },
          }}

            />

            </Grid>
            <Grid item xs={12}>
            <TextField
            {...register("message",{required:"true"})}
            fullWidth
            label="Message"
            margin="normal"
            required
            error={errors.message}
            helperText={errors.message && "Message is required"}
            multiline
            rows={4}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '& .MuiInputBase-input': { color: '#333333' },
              '& .MuiInputLabel-root': { color: '#13C5DD' },
              '& .MuiFormHelperText-root': { color: '#FF6347' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#13C5DD',
              },
          }}

          />

            </Grid>
            </Grid>

            <Button variant='contained' onClick={handleSubmit(onSubmit)} sx={{alignItems:"center",justifyContent:"center"}} >Make An Appointment</Button>


          </Box>

        </Grid>
      </Grid>
      
    </Box>
    </section>
  )
}

export default Appointment
