import React,{useEffect, useState} from 'react';
import StudentDashboardSideBar from '../components/StudentDashboardSideBar';
import '../assets/css/AdminDashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { myeventsRoute } from '../utils/APIRoutes';
import loading from "../assets/images/loading.gif";
import styled from 'styled-components';
import Card from '../components/Card';

const StudentDashboard = () => {
   const [myEvents,setEvents]=useState([]);
   const [isLoading,setLoading]=useState(false);
  const navigate=useNavigate();

  const validation=async(data)=>{
    try {
      const userdata=JSON.parse(data);
      if(userdata.isAdmin===false){
        setLoading(true);
       const response=await axios.post(myeventsRoute,{token:userdata.user});
       if(!response.status){
        localStorage.removeItem("vit-data");
        navigate("/")
       }
       else{
         setEvents(response.data.events);
         setLoading(false);
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
      <StudentDashboardSideBar />
      <div className="dash-rightContainer">
      {isLoading ?  <Wrapper><img style={{height:"300px",width:"350px"}} src={loading} alt='...loading'/> </Wrapper>: 
      <Wrapper>
      {myEvents.length===0 && <div>No registered Events!</div>}
   {myEvents.map((item,index)=>{
   return <Card key={index} image={item.image} title={item.title} eventId={item._id} date={item.date} users={item.registeredStudents.length} />
   })}
   </Wrapper>
      }
      </div>
    </section>
  )
}

export default StudentDashboard;


const Wrapper=styled.div`
display:flex;
padding-top:30px;
row-gap:30px;
column-gap:30px;
flex-wrap:wrap;
justify-content:center;

`