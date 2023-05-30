import React from 'react';
import { Link  } from 'react-router-dom';

const DashboardSideBar = () => {
  return (
    <div className="leftContainer">
        <button >
          <Link className="eventBtn" to="/dashboard/admin/alleventslist">All events List</Link>
        </button>
        <button >
          <Link className="eventBtn"  to="/dashboard/admin/alleventsform">All events Form</Link>
        </button>
        <button className="eventsBtn">Logout</button>
        
        
    </div> 
  )
}

export default DashboardSideBar