import React from 'react';
import {Outlet } from 'react-router-dom';
import DashboardSideBar from '../components/DashboardSideBar';
import '../assets/css/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <section className="Dashboard">
      <DashboardSideBar />
      <div className="rightContainer">
        <Outlet />
      </div>
    </section>
  )
}

export default AdminDashboard