import React, { useEffect, useState } from "react";
import { Link ,useNavigate,useLocation} from "react-router-dom"
import {MdAccountCircle} from "react-icons/md"
import "../assets/css/NavbarStyles.css"
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";


const Navbar =()=>{
  const navigate=useNavigate();
  const location=useLocation();
  const [user,setuser]=useState(null);
  const isMobile = useMediaQuery("(max-width: 500px)");

useEffect(() => {
  const data=localStorage.getItem("vit-data");
  if(data){
      const userdata=JSON.parse(data);
      setuser(userdata);
  }
  else{
   setuser(null);
  }
}, [location]);


  const handleClick=()=>{
    
    if(user.isAdmin===true){
      
      navigate("/dashboard/admin")
    }
    else {
 
    navigate("/dashboard/student")
   }
   
  }
  return (
<header>
{isMobile ?
  <h2 className="logo"><Link to="/">VIT</Link></h2>:
  <h2 className="logo"><Link to="/">VITcompanion</Link></h2>
}

  <div className="menuitems">
   <Link to="/events">Events</Link>
  {!user ? <Button onClick={()=>navigate("/signup")}>Login/SignUp</Button>:
   <MdAccountCircle onClick={handleClick} className="user-icon"/>
  }
  </div>
</header> 
 );
};
export default Navbar;

const Button=styled.button`
padding:10px;
border-radius:10px;
font-weight:bold;
background:#7beaa4;
border:none;
`