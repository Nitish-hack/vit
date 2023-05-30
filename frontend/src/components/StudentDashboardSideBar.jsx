import React from 'react';
import { Link  } from 'react-router-dom';

const StudentDashboardSideBar = () => {
  return (
    <div className="leftContainer">
        <button >
          <Link className="eventBtn" to="/dashboard/student/alleventslist">All events List</Link>
        </button>
        <button className="eventsBtn">Logout</button>
    </div> 
  )
}

export default StudentDashboardSideBar