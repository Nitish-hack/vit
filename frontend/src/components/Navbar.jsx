import React from "react";
import { Link } from "react-router-dom"
import {MdAccountCircle} from "react-icons/md"
import "../assets/css/NavbarStyles.css"

const Navbar =()=>{
  return (
<header>
  <h2 className="logo"><Link to="/">VITcompanion</Link></h2>
  <div className="menuitems">
   <Link to="/events">Events</Link>
   <Link className="user-icon" to="/dashboard/admin"><MdAccountCircle /></Link>
  </div>
</header> 
 );
};
export default Navbar;