import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard"
import SignPage from "./pages/SignPage";
import AllEventsForm from "./components/AllEventsForm";
import AllEventsList from "./components/AllEventsList";

import "./App.css";
export default function App() {
  return (
    <div className="app">
    <div className="content">
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />}>
            <Route path="alleventslist" element={<AllEventsList />} />
            <Route path="alleventsform" element={<AllEventsForm />} />
          </Route>
          <Route path="/dashboard/student" element={<StudentDashboard />}>
            <Route path="alleventslist" element={<AllEventsList />} />
          </Route>
        </Routes>
      </Router>
    </div>
    </div>
  );
}
