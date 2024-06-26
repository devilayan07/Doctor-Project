import './App.css';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
// import Registration from './Pages/AUTH/Registration/Registration';
// import Login from './Pages/AUTH/Login/Login';
import Header from './Pages/Layout/Header/Header';
// import Home from './Pages/CMS/Home/Home';
// import Department from './Pages/CMS/Department/Department';
// import Departmentwisedoctor from './Pages/CMS/Departmentwisedoctor/Departmentwisedoctor';
// import Doctordetails from './Pages/CMS/Doctordetails/Doctordetails';
// import Appointment from './Pages/CMS/Appointment/Appointment';
// import Userdashboard from './Pages/CMS/Userdashboard/Userdashboard';
// import About from './Pages/CMS/About/About';
// import Blog from './Pages/CMS/Blog/Blog';
// import Blogdetails from './Pages/CMS/Blogdetails/Blogdetails';
// import Contact from './Pages/CMS/Contact/Contact';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { check_token } from './ReduxToolkit/AuthSlice';
import { toast } from 'react-toastify';
import Loader from './Component/Loader/Loader';
import Footer from './Pages/Layout/Footer/Footer';
const Home=lazy(()=>import("./Pages/CMS/Home/Home"))
const Login=lazy(()=>import("./Pages/AUTH/Login/Login"))
const Registration=lazy(()=>import("./Pages/AUTH/Registration/Registration"))
const Department=lazy(()=>import("./Pages/CMS/Department/Department"))
const Departmentwisedoctor=lazy(()=>import("./Pages/CMS/Departmentwisedoctor/Departmentwisedoctor"))
const Doctordetails=lazy(()=>import("./Pages/CMS/Doctordetails/Doctordetails"))
const Appointment=lazy(()=>import("./Pages/CMS/Appointment/Appointment"))
const Userdashboard=lazy(()=>import("./Pages/CMS/Userdashboard/Userdashboard"))
const About=lazy(()=>import("./Pages/CMS/About/About"))
const Blog=lazy(()=>import("./Pages/CMS/Blog/Blog"))
const Blogdetails=lazy(()=>import("./Pages/CMS/Blogdetails/Blogdetails"))
const Contact=lazy(()=>import("./Pages/CMS/Contact/Contact"))
const Doctors=lazy(()=>import("./Pages/CMS/Doctors/Doctors"))
function App() {
  function PrivateRoute({children}){
    console.log(children,"children")
    const token=localStorage.getItem("token") || sessionStorage.getItem("token");
  
    return token!==null && token!==undefined?(
      children):(
        <>
        <Navigate to="/"/>
        {toast("Please go for login either you can't access other pages")}
        </>
      )
    
  
  }
  


  const PublicRouteNames=[
    {
      path:"/",
      Component:<Home/>
    },
    {
      path:"/login",
      Component:<Login/>
    },
    {
      path:"/register",
      Component:<Registration/>
    }
  ]

  const PrivateRouteNames=[
    {
      path:"/department",
      Component:<Department/>
    },
    {
      path:"/department/:id",
      Component:<Departmentwisedoctor/>
    },
    {
      path:"/doctordetails/:id",
      Component:<Doctordetails/>
    },
    {
      path:"/appointment/:id",
      Component:<Appointment/>
    },
    {
      path:"/dashboard",
      Component:<Userdashboard/>
    },
    {
      path:"/about",
      Component:<About/>
    },
    {
      path:"/blog",
      Component:<Blog/>
    },
    {
      path:"/blogdetails/:id",
      Component:<Blogdetails/>
    },
    {
      path:"/contact",
      Component:<Contact/>
    },
    {
      path:"/doctor",
      Component:<Doctors/>
    }
  ]


  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(check_token())
  })
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <Router>
        <Header/>
        <Routes>
          {
            PublicRouteNames?.map((route,index)=>{
              return(
                <Route key={index} exact path={route.path} element={route.Component}/>
              )
            })
          }
          {
            PrivateRouteNames?.map((route,index)=>{
              return(
                <Route key={index} exact path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>}/>

              )
            })
          }
        </Routes>
      <Footer/>
      </Router>
      </Suspense>
    </div>
  );
}

export default App;
