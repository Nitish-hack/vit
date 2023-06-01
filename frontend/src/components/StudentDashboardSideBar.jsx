import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboardSideBar = () => {
  const [clicked,setClicked]=useState(0);
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("vit-data");
    navigate("/");
  }
  return (
    <div className="dash-leftContainer">
       
        <button style={{background:clicked===0?"#7beaa4":""}} 
        onClick={()=>{
          setClicked(0);
          navigate("/dashboard/student/");
        }}
        >
        My events
        </button>
        <button className="dash-eventsBtn" onClick={handleLogout}>Logout</button>
    </div> 
  )
}

export default StudentDashboardSideBar