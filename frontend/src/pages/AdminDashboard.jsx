import React, { useEffect } from 'react';
import {Outlet, useNavigate } from 'react-router-dom';
import DashboardSideBar from '../components/DashboardSideBar';
import '../assets/css/AdminDashboard.css';
import { verifyRoute } from '../utils/APIRoutes';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate=useNavigate();

  const validation=async(data)=>{
    try {
      const userdata=JSON.parse(data);
      if(userdata.isAdmin===true){
       
       const response=await axios.post(verifyRoute,{token:userdata.user});
       if(!response.status){
        localStorage.removeItem("vit-data");
        navigate("/")
       }
      }
      else{
        navigate("/");
        
      }
    } catch (error) {
      localStorage.removeItem("vit-data");
      navigate("/");
    }
   
  }
  useEffect(() => {
    const data=localStorage.getItem("vit-data");
  if(data){
validation(data);    
  }
  else{
    navigate("/signup");
  }
  }, []);
  return (
    <section className="dash-Dashboard">
      <DashboardSideBar />
      <div className="dash-rightContainer">
      
        <Outlet />
      </div>
    </section>
  )
}

export default AdminDashboard