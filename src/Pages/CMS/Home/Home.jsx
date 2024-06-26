import React, { useEffect } from 'react'
import BannerView from '../Banner/BannerView'
import FeaturedDoctors from '../Featured/FeaturedDoctors'
import Services from '../Services/Services'
import { useDispatch } from 'react-redux'
import { reset_redirectTo } from '../../../ReduxToolkit/AuthSlice'

function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(reset_redirectTo(null))
  },[dispatch])
  return (
    <div>
      <BannerView/>
      <FeaturedDoctors/>
      <Services/>
    </div>
  )
}

export default Home
