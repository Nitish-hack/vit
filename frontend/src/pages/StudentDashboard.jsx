import React from 'react';
import StudentDashboardSideBar from '../components/StudentDashboardSideBar';
import '../assets/css/AdminDashboard.css';
import AllEventsList from '../components/AllEventsList';

const StudentDashboard = () => {
  return (
    <section className="Dashboard">
      <StudentDashboardSideBar />
      <div className="rightContainer">
        <AllEventsList />
      </div>
    </section>
  )
}

export default StudentDashboard